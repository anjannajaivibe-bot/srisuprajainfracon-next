import fs from "fs";
import path from "path";
import https from "https";

const BLOG_DIR = "content/blog";
const IMG_DIR = "public/uploads/blog";

fs.mkdirSync(IMG_DIR, { recursive: true });

function downloadFile(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);

    https
      .get(url, (res) => {
        if (res.statusCode !== 200) {
          file.close();
          fs.unlink(filepath, () => {});
          reject(new Error(`Failed ${res.statusCode}: ${url}`));
          return;
        }

        res.pipe(file);
        file.on("finish", () => file.close(resolve));
      })
      .on("error", reject);
  });
}

const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".json"));

for (const file of files) {
  const fullPath = path.join(BLOG_DIR, file);
  const post = JSON.parse(fs.readFileSync(fullPath, "utf8"));

  let content = post.content || "";
  const matches = [...content.matchAll(/https:\/\/srisuprajainfracon\.com\/wp-content\/uploads\/[^"')\s]+/g)];

  for (const match of matches) {
    const url = match[0];
    const filename = path.basename(new URL(url).pathname);
    const localPath = path.join(IMG_DIR, filename);
    const localUrl = `/uploads/blog/${filename}`;

    try {
      if (!fs.existsSync(localPath)) {
        console.log(`Downloading: ${filename}`);
        await downloadFile(url, localPath);
      }

      content = content.replaceAll(url, localUrl);
    } catch {
      console.log(`Skipped: ${url}`);
    }
  }

  post.content = content;

  fs.writeFileSync(fullPath, JSON.stringify(post, null, 2));
}

console.log("Inline blog images downloaded and updated.");