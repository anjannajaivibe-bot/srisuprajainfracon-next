import fs from "fs";
import path from "path";
import sharp from "sharp";

const IMG_DIR = "public/uploads/blog";
const BLOG_DIR = "content/blog";

const files = fs
  .readdirSync(IMG_DIR)
  .filter((file) => /\.(jpg|jpeg|png)$/i.test(file));

for (const file of files) {
  const input = path.join(IMG_DIR, file);

  const ext = path.extname(file);
  const base = path.basename(file, ext);

  const output = path.join(IMG_DIR, `${base}.webp`);

  await sharp(input)
    .resize({
      width: 1400,
      withoutEnlargement: true,
    })
    .webp({
      quality: 78,
    })
    .toFile(output);

  console.log(`Optimized: ${file}`);
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
    json.content = json.content.replace(
      /\.(jpg|jpeg|png)/gi,
      ".webp"
    );
  }

  fs.writeFileSync(filePath, JSON.stringify(json, null, 2));
}

console.log("All blog images optimized to WebP.");