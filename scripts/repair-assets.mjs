import sharp from "sharp";

const files = [
  "src/assets/hero-bg.webp",
  "src/assets/project-meadows.webp",
  "src/assets/project-sindhu.webp",
  "src/assets/tudi-praveen.webp",
];

for (const file of files) {
  try {
    await sharp(file)
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(file.replace(".webp", "-fixed.webp"));

    console.log(`Fixed: ${file}`);
  } catch (error) {
    console.log(`Failed: ${file}`);
    console.log(error.message);
  }
}