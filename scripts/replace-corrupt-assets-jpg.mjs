import sharp from "sharp";

const files = [
  "src/assets/hero-bg.jpg",
  "src/assets/project-meadows.jpg",
  "src/assets/project-sindhu.jpg",
  "src/assets/tudi-praveen.jpg",
];

for (const file of files) {
  await sharp({
    create: {
      width: 1600,
      height: 900,
      channels: 3,
      background: "#0b2219",
    },
  })
    .jpeg({ quality: 85 })
    .toFile(file);

  console.log(`Created valid JPG: ${file}`);
}