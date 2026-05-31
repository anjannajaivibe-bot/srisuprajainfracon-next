import fs from "fs";
import path from "path";
import https from "https";

const BLOG_URLS = [
  "upcoming-attractions-near-hyderabad-2026",
  "what-is-dtcp-approval-in-hyderabad",
  "kamkole-real-estate-investment-hotspot",
  "dtcp-rera-approved-plots-in-hyderabad",
  "open-villa-plot-projects-in-hyderabad",
  "best-open-plots-in-hyderabad-for-sale",
  "upcoming-developing-areas-in-hyderabad-2026",
  "dtcp-approved-plots-in-hyderabad",
  "best-plots-in-hyderabad",
  "hyderabad-investment-areas",
  "rera-approved-plots-hyderabad-guide",
  "open-plots-in-hyderabad",
  "plots-near-orr-hyderabad",
  "hyderabad-real-estate-market-trends-2025",
  "top-open-plots-resorts-hyderabad",
  "best-open-plots-resorts-in-hyderabad",
  "open-plots-in-hyderabad-investment-2025"
];

const WP_API = "https://srisuprajainfracon.com/wp-json/wp/v2/posts";
const OUT_DIR = "content/blog";
const IMG_DIR = "public/uploads/blog";

fs.mkdirSync(OUT_DIR, { recursive: true });
fs.mkdirSync(IMG_DIR, { recursive: true });

async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res.json();
}

function downloadFile(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);

    https
      .get(url, (response) => {
        if (response.statusCode !== 200) {
          file.close();
          fs.unlink(filepath, () => {});
          reject(new Error(`Failed ${response.statusCode}: ${url}`));
          return;
        }

        response.pipe(file);
        file.on("finish", () => file.close(resolve));
      })
      .on("error", reject);
  });
}

function getSafeFileName(url, slug) {
  const ext = path.extname(new URL(url).pathname) || ".jpg";
  const shortId = Math.random().toString(36).substring(2, 10);
  return `${slug}-${shortId}${ext}`;
}

async function downloadAndReplaceImages(html, slug) {
  let updatedHtml = html || "";

  const imageUrls = [
    ...updatedHtml.matchAll(
      /https:\/\/srisuprajainfracon\.com\/wp-content\/uploads\/[^"')\s]+/g
    ),
  ].map((match) => match[0]);

  const uniqueUrls = [...new Set(imageUrls)];

  for (const imageUrl of uniqueUrls) {
    const fileName = getSafeFileName(imageUrl, slug);
    const localPath = path.join(IMG_DIR, fileName);
    const localUrl = `/uploads/blog/${fileName}`;

    try {
      if (!fs.existsSync(localPath)) {
        console.log(`Downloading inline image: ${fileName}`);
        await downloadFile(imageUrl, localPath);
      }

      updatedHtml = updatedHtml.replaceAll(imageUrl, localUrl);
    } catch {
      console.log(`Skipped inline image: ${imageUrl}`);
    }
  }

  return updatedHtml;
}

async function downloadFeaturedImage(post, slug) {
  const media = post._embedded?.["wp:featuredmedia"]?.[0];

  if (!media?.source_url) return "";

  const ext = path.extname(new URL(media.source_url).pathname) || ".jpg";
  const fileName = `${slug}-featured${ext}`;
  const filePath = path.join(IMG_DIR, fileName);

  try {
    if (!fs.existsSync(filePath)) {
      console.log(`Downloading featured image: ${fileName}`);
      await downloadFile(media.source_url, filePath);
    }

    return `/uploads/blog/${fileName}`;
  } catch {
    console.log(`Featured image failed: ${media.source_url}`);
    return media.source_url;
  }
}

for (const slug of BLOG_URLS) {
  console.log(`Migrating: ${slug}`);

  const posts = await fetchJson(`${WP_API}?slug=${slug}&_embed`);
  const post = posts?.[0];

  if (!post) {
    console.log(`Missing: ${slug}`);
    continue;
  }

  const yoast = post.yoast_head_json || {};
  const featuredImage = await downloadFeaturedImage(post, slug);
  const content = await downloadAndReplaceImages(post.content.rendered, slug);
  const excerpt = await downloadAndReplaceImages(post.excerpt.rendered, slug);

  const blogData = {
    id: post.id,
    slug,
    title: post.title.rendered,
    seoTitle: yoast.title || post.title.rendered,
    metaDescription: yoast.description || "",
    canonical: `https://srisuprajainfracon.com/blog/${slug}/`,
    date: post.date,
    modified: post.modified,
    featuredImage,
    excerpt,
    content,
  };

  fs.writeFileSync(
    path.join(OUT_DIR, `${slug}.json`),
    JSON.stringify(blogData, null, 2)
  );
}

console.log("Blog migration completed with featured and inline images.");