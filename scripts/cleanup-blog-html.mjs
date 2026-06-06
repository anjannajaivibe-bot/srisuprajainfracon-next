import fs from "fs";
import path from "path";

const BLOG_DIR = "content/blog";
const OLD_DOMAIN = "https://srisuprajainfracon.com";
const NEW_DOMAIN = "https://www.suprajainfracon.com";

function cleanHtml(html = "") {
  return html
    // Normalize domains
    .replaceAll(OLD_DOMAIN, NEW_DOMAIN)

    // Convert internal absolute links to relative links
    .replaceAll(`${NEW_DOMAIN}/blog/`, "/blog/")
    .replaceAll(`${NEW_DOMAIN}/projects/`, "/projects/")
    .replaceAll(`${NEW_DOMAIN}/contact-us//`, "/contact-us//")
    .replaceAll(`${NEW_DOMAIN}/about/`, "/about/")

    // Remove WordPress block comments
    .replace(/<!--\s*wp:[\s\S]*?-->/g, "")

    // Remove inline styles
    .replace(/\sstyle="[^"]*"/gi, "")

    // Remove WordPress classes but keep useful generic classes if any
    .replace(/\sclass="[^"]*wp-[^"]*"/gi, "")
    .replace(/\sclass="[^"]*yoast[^"]*"/gi, "")

    // Remove width/height from inline images so CSS controls layout
    .replace(/\swidth="[^"]*"/gi, "")
    .replace(/\sheight="[^"]*"/gi, "")

    // Remove decoding/loading/fetchpriority clutter from imported HTML
    .replace(/\sdecoding="[^"]*"/gi, "")
    .replace(/\sloading="[^"]*"/gi, "")
    .replace(/\sfetchpriority="[^"]*"/gi, "")

    // Remove empty paragraphs
    .replace(/<p>\s*<\/p>/gi, "")

    // Remove empty spans/divs
    .replace(/<span>\s*<\/span>/gi, "")
    .replace(/<div>\s*<\/div>/gi, "")

    // Simplify excessive newlines
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

const files = fs.readdirSync(BLOG_DIR).filter((file) => file.endsWith(".json"));

for (const file of files) {
  const filePath = path.join(BLOG_DIR, file);
  const post = JSON.parse(fs.readFileSync(filePath, "utf8"));

  post.title = post.title?.trim();
  post.seoTitle = post.seoTitle?.trim();
  post.metaDescription = post.metaDescription?.trim();
  post.excerpt = cleanHtml(post.excerpt || "");
  post.content = cleanHtml(post.content || "");

  fs.writeFileSync(filePath, JSON.stringify(post, null, 2));
  console.log(`Cleaned: ${file}`);
}

console.log("Blog HTML cleanup completed.");