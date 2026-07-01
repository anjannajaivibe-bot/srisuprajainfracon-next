import fs from "fs";
import path from "path";
import sharp from "sharp";

const IMG_DIR = "public/uploads/blog";
const BLOG_DIR = "content/blog";
const TARGET_BYTES = 80 * 1024;

const imageFiles = fs
  .readdirSync(IMG_DIR)
  .filter(
    (file) =>
      /\.(jpg|jpeg|png|webp)$/i.test(file) &&
      !file.includes("-temp") &&
      !file.includes("-old")
  );

for (const file of imageFiles) {
  const input = path.join(IMG_DIR, file);
  const ext = path.extname(file).toLowerCase();
  const base = path.basename(file, ext);
  const isWebp = ext === ".webp";

  const currentSize = fs.statSync(input).size;

  if (isWebp && currentSize <= TARGET_BYTES) {
    console.log(`Skipped: ${file} already below 80 KB`);
    continue;
  }

  const output = isWebp
    ? path.join(IMG_DIR, `${base}-temp.webp`)
    : path.join(IMG_DIR, `${base}.webp`);

  let optimized = false;
  const attempts = [
    { width: 1400, quality: 78 },
    { width: 1400, quality: 70 },
    { width: 1200, quality: 65 },
    { width: 1100, quality: 60 },
    { width: 1000, quality: 55 },
    { width: 900, quality: 50 },
    { width: 800, quality: 45 },
  ];

  for (const attempt of attempts) {
    try {
      await sharp(input)
        .resize({
          width: attempt.width,
          withoutEnlargement: true,
        })
        .webp({
          quality: attempt.quality,
          effort: 6,
        })
        .toFile(output);

      const outputSize = fs.statSync(output).size;

      if (outputSize <= TARGET_BYTES) {
        if (isWebp) {
          try {
            fs.copyFileSync(output, input);
            fs.unlinkSync(output);
          } catch {
            console.warn(`Skipped locked file: ${file}`);
            if (fs.existsSync(output)) fs.unlinkSync(output);
            optimized = true;
            break;
          }
        }

        console.log(
          `Optimized: ${file} → ${base}.webp (${Math.round(
            outputSize / 1024
          )} KB)`
        );

        optimized = true;
        break;
      }
    } catch (error) {
      console.warn(`Failed: ${file}`);
      if (fs.existsSync(output)) fs.unlinkSync(output);
      optimized = true;
      break;
    }
  }

  if (!optimized) {
    if (fs.existsSync(output)) fs.unlinkSync(output);
    console.warn(`Could not reduce below 80 KB: ${file}`);
  }
}

const blogFiles = fs
  .readdirSync(BLOG_DIR)
  .filter((file) => file.endsWith(".json"));

for (const file of blogFiles) {
  const filePath = path.join(BLOG_DIR, file);
  const json = JSON.parse(fs.readFileSync(filePath, "utf8"));

  if (json.featuredImage) {
    json.featuredImage = json.featuredImage.replace(
      /\.(jpg|jpeg|png)$/i,
      ".webp"
    );
  }

  if (json.content) {
    json.content = json.content.replace(/\.(jpg|jpeg|png)/gi, ".webp");
  }

  fs.writeFileSync(filePath, JSON.stringify(json, null, 2));
}

console.log("All blog images optimized.");