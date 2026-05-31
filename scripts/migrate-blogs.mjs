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
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        file.close();
        fs.unlinkSync(filepath);
        reject(new Error(`Image failed: ${url}`));
        return;
      }
      response.pipe(file);
      file.on("finish", () => file.close(resolve));
    }).on("error", reject);
  });
}

function cleanHtml(html = "") {
  return html
    .replace(/https:\/\/srisuprajainfracon\.com\//g, "/")
    .replace(/src="https:\/\/srisuprajainfracon\.com\/wp-content\/uploads\//g, 'src="/uploads/blog/');
}

for (const slug of BLOG_URLS) {
  console.log(`Migrating: ${slug}`);

  const posts = await fetchJson(`${WP_API}?slug=${slug}&_embed`);
  const post = posts?.[0];

  if (!post) {
    console.log(`Missing: ${slug}`);
    continue;
  }

  let featuredImage = "";
  const media = post._embedded?.["wp:featuredmedia"]?.[0];

  if (media?.source_url) {
    const ext = path.extname(new URL(media.source_url).pathname) || ".jpg";
    const fileName = `${slug}${ext}`;
    const filePath = path.join(IMG_DIR, fileName);

    try {
      await downloadFile(media.source_url, filePath);
      featuredImage = `/uploads/blog/${fileName}`;
    } catch {
      featuredImage = media.source_url;
    }
  }

  const yoast = post.yoast_head_json || {};

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
    excerpt: post.excerpt.rendered,
    content: cleanHtml(post.content.rendered)
  };

  fs.writeFileSync(
    path.join(OUT_DIR, `${slug}.json`),
    JSON.stringify(blogData, null, 2)
  );
}

console.log("Blog migration completed.");