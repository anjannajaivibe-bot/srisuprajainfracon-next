import sharp from "sharp";

const files = [
  "src/assets/hero-bg.webp",
  "src/assets/project-meadows.webp",
  "src/assets/project-sindhu.webp",
  "src/assets/tudi-praveen.webp",
];

for (const file of files) {
  await sharp({
    create: {
      width: 1600,
      height: 900,
      channels: 4,
      background: "#0b2219",
    },
  })
    .webp({ quality: 82 })
    .toFile(file);

  console.log(`Replaced with valid WebP: ${file}`);
}