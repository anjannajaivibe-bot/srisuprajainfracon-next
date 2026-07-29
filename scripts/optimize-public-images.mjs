import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const publicDirectory = path.resolve("public");
const targetBytes = 100 * 1024;
const supportedExtensions = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".avif",
]);

function findImages(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      return findImages(fullPath);
    }

    return supportedExtensions.has(path.extname(entry.name).toLowerCase())
      ? [fullPath]
      : [];
  });
}

async function encodeImage(inputBuffer, extension, quality, width) {
  let pipeline = sharp(inputBuffer)
    .rotate()
    .resize({
      width,
      withoutEnlargement: true,
      fit: "inside",
    });

  if (extension === ".jpg" || extension === ".jpeg") {
    return pipeline
      .jpeg({
        quality,
        mozjpeg: true,
        progressive: true,
      })
      .toBuffer();
  }

  if (extension === ".png") {
    return pipeline
      .png({
        compressionLevel: 9,
        adaptiveFiltering: true,
        palette: true,
        quality,
        effort: 10,
      })
      .toBuffer();
  }

  if (extension === ".avif") {
    return pipeline
      .avif({
        quality,
        effort: 6,
      })
      .toBuffer();
  }

  return pipeline
    .webp({
      quality,
      effort: 6,
      smartSubsample: true,
    })
    .toBuffer();
}

async function optimizeImage(filePath) {
  const originalSize = fs.statSync(filePath).size;

  if (originalSize <= targetBytes) {
    return null;
  }

  const extension = path.extname(filePath).toLowerCase();
  const inputBuffer = fs.readFileSync(filePath);
  const metadata = await sharp(inputBuffer).metadata();

  let width = metadata.width;
  let bestBuffer = inputBuffer;

  const qualityLevels = [82, 76, 70, 64, 58, 52, 46, 40];

  for (let resizeAttempt = 0; resizeAttempt < 8; resizeAttempt += 1) {
    for (const quality of qualityLevels) {
      const outputBuffer = await encodeImage(
        inputBuffer,
        extension,
        quality,
        width
      );

      if (outputBuffer.length < bestBuffer.length) {
        bestBuffer = outputBuffer;
      }

      if (outputBuffer.length <= targetBytes) {
        const temporaryPath = `${filePath}.optimization-temp`;
        fs.writeFileSync(temporaryPath, outputBuffer);
        fs.renameSync(temporaryPath, filePath);

        return {
          filePath,
          originalSize,
          finalSize: outputBuffer.length,
          resizedWidth: width,
        };
      }
    }

    if (!width || width <= 640) {
      break;
    }

    width = Math.max(640, Math.floor(width * 0.85));
  }

  if (bestBuffer.length < originalSize) {
    const temporaryPath = `${filePath}.optimization-temp`;
    fs.writeFileSync(temporaryPath, bestBuffer);
    fs.renameSync(temporaryPath, filePath);
  }

  return {
    filePath,
    originalSize,
    finalSize: bestBuffer.length,
    resizedWidth: width,
    warning: bestBuffer.length > targetBytes,
  };
}

const images = findImages(publicDirectory);
const oversizedImages = images.filter(
  (filePath) => fs.statSync(filePath).size > targetBytes
);

console.log(`Found ${oversizedImages.length} images above 100 KB.`);

let originalTotal = 0;
let finalTotal = 0;
let optimizedCount = 0;
let warningCount = 0;

for (const filePath of oversizedImages) {
  try {
    const result = await optimizeImage(filePath);

    if (!result) {
      continue;
    }

    originalTotal += result.originalSize;
    finalTotal += result.finalSize;
    optimizedCount += 1;

    const relativePath = path.relative(process.cwd(), result.filePath);
    const beforeKB = (result.originalSize / 1024).toFixed(1);
    const afterKB = (result.finalSize / 1024).toFixed(1);

    if (result.warning) {
      warningCount += 1;
      console.warn(`WARNING: ${relativePath}: ${beforeKB} KB -> ${afterKB} KB`);
    } else {
      console.log(`Optimized: ${relativePath}: ${beforeKB} KB -> ${afterKB} KB`);
    }
  } catch (error) {
    console.error(`FAILED: ${filePath}`);
    console.error(error instanceof Error ? error.message : error);
  }
}

const savedBytes = originalTotal - finalTotal;

console.log("");
console.log(`Optimized images: ${optimizedCount}`);
console.log(`Remaining warnings: ${warningCount}`);
console.log(`Space saved: ${(savedBytes / 1024 / 1024).toFixed(2)} MB`);
