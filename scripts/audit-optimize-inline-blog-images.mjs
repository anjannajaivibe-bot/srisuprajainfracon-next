import fs from "fs";
import path from "path";
import sharp from "sharp";

const ROOT = process.cwd();
const BLOG_DIR = path.join(ROOT, "content", "blog");
const PUBLIC_DIR = path.join(ROOT, "public");
const TARGET_BYTES = 80 * 1024;
const MIN_SAVING_RATIO = 0.15;

const imageCache = new Map();
const referencedInlineImages = new Set();
let updatedPosts = 0;
let enrichedImages = 0;
let optimizedImages = 0;
let bytesBefore = 0;
let bytesAfter = 0;

function getAttr(tag, name) {
  const match = tag.match(new RegExp(`\\b${name}\\s*=\\s*["']([^"']+)["']`, "i"));
  return match?.[1] || "";
}

function addAttr(tag, name, value) {
  if (new RegExp(`\\b${name}\\s*=`, "i").test(tag)) return tag;
  return tag.replace(/^<img\b/i, `<img ${name}="${value}"`);
}

async function getImageInfo(src) {
  if (!src.startsWith("/uploads/blog/")) return null;
  if (imageCache.has(src)) return imageCache.get(src);

  const filePath = path.join(PUBLIC_DIR, src.replace(/^\/+/, ""));
  if (!fs.existsSync(filePath)) {
    imageCache.set(src, null);
    return null;
  }

  try {
    const metadata = await sharp(filePath).metadata();
    const info = metadata.width && metadata.height
      ? { filePath, width: metadata.width, height: metadata.height }
      : null;
    imageCache.set(src, info);
    return info;
  } catch (error) {
    console.warn(`Could not inspect ${src}: ${error.message}`);
    imageCache.set(src, null);
    return null;
  }
}

async function enrichContentImages(content) {
  const matches = [...content.matchAll(/<img\b[^>]*>/gi)];
  if (matches.length === 0) return { content, changed: false };

  let output = "";
  let cursor = 0;
  let changed = false;

  for (const match of matches) {
    const original = match[0];
    const src = getAttr(original, "src");
    output += content.slice(cursor, match.index);

    if (!src.startsWith("/uploads/blog/")) {
      output += original;
      cursor = match.index + original.length;
      continue;
    }

    referencedInlineImages.add(src);
    const info = await getImageInfo(src);
    let updated = original;

    if (info) {
      updated = addAttr(updated, "width", info.width);
      updated = addAttr(updated, "height", info.height);
    }

    updated = addAttr(updated, "loading", "lazy");
    updated = addAttr(updated, "decoding", "async");

    if (updated !== original) {
      changed = true;
      enrichedImages += 1;
    }

    output += updated;
    cursor = match.index + original.length;
  }

  output += content.slice(cursor);
  return { content: output, changed };
}

async function optimizeWebp(src) {
  const info = await getImageInfo(src);
  if (!info || path.extname(info.filePath).toLowerCase() !== ".webp") return;

  const original = fs.readFileSync(info.filePath);
  if (original.length <= TARGET_BYTES) return;

  let best = original;
  for (const quality of [80, 76, 72, 68, 64, 60, 56]) {
    const candidate = await sharp(original)
      .webp({ quality, effort: 5 })
      .toBuffer();

    if (candidate.length < best.length) best = candidate;
    if (candidate.length <= TARGET_BYTES) break;
  }

  const savingRatio = 1 - best.length / original.length;
  if (best.length < original.length && (best.length <= TARGET_BYTES || savingRatio >= MIN_SAVING_RATIO)) {
    fs.writeFileSync(info.filePath, best);
    optimizedImages += 1;
    bytesBefore += original.length;
    bytesAfter += best.length;
    imageCache.delete(src);
    console.log(`Optimized ${src}: ${(original.length / 1024).toFixed(1)} KB -> ${(best.length / 1024).toFixed(1)} KB`);
  }
}

async function main() {
  const files = fs.readdirSync(BLOG_DIR).filter((file) => file.endsWith(".json"));

  for (const file of files) {
    const filePath = path.join(BLOG_DIR, file);
    const raw = fs.readFileSync(filePath, "utf8");
    const post = JSON.parse(raw);
    if (typeof post.content !== "string") continue;

    const result = await enrichContentImages(post.content);
    if (!result.changed) continue;

    post.content = result.content;
    fs.writeFileSync(filePath, `${JSON.stringify(post, null, 2)}\n`);
    updatedPosts += 1;
  }

  for (const src of referencedInlineImages) {
    await optimizeWebp(src);
  }

  console.log(`Updated blog posts: ${updatedPosts}`);
  console.log(`Inline image tags enriched: ${enrichedImages}`);
  console.log(`Inline WebP files optimized: ${optimizedImages}`);
  if (bytesBefore > 0) {
    console.log(`Optimized payload: ${(bytesBefore / 1024).toFixed(1)} KB -> ${(bytesAfter / 1024).toFixed(1)} KB`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
