import { readdirSync, readFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Prevent the removed Tranquil CRM lead sync from returning in future builds.
// Live plot availability links are intentionally exempt and remain untouched.
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourceDir = path.join(root, 'src');
const publicDir = path.join(root, 'public');
const inventorySource = 'src/data/projects.tsx';
const approvedInventoryUrls = [1, 2, 4, 7].map(
  (id) => `https://suprajagroup.tranquilcrmp.in/mobileapp/newmaps/${id}`,
);
const restrictedPattern = /tranquilcrmone\.in|tranquilcrmp\.in|TRANQUIL_CRM_API_KEY|sendLeadToTranquilCrm|\/v2\/createlead/i;
const inspectExtensions = new Set(['.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs', '.html']);
const errors = [];
let inspected = 0;

function walk(dir) {
  if (!existsSync(dir)) return;
  for (const item of readdirSync(dir, { withFileTypes: true })) {
    if (item.isDirectory()) {
      walk(path.join(dir, item.name));
      continue;
    }
    if (!item.isFile() || !inspectExtensions.has(path.extname(item.name))) continue;

    const absolute = path.join(dir, item.name);
    const relative = path.relative(root, absolute).replaceAll(path.sep, '/');
    let content = readFileSync(absolute, 'utf8');
    inspected++;

    if (relative === inventorySource) {
      for (const url of approvedInventoryUrls) {
        const matches = content.split(url).length - 1;
        if (matches !== 1) {
          errors.push(`${relative}: expected existing inventory link exactly once (${url}), found ${matches}`);
        }
        content = content.replace(url, '[APPROVED_INVENTORY_LINK]');
      }
    }

    if (restrictedPattern.test(content)) {
      errors.push(`${relative}: found prohibited Tranquil CRM integration or unapproved endpoint`);
    }
  }
}

walk(sourceDir);
walk(publicDir);
for (const filename of ['next.config.ts', 'next.config.js', 'vercel.json']) {
  const file = path.join(root, filename);
  if (existsSync(file) && restrictedPattern.test(readFileSync(file, 'utf8'))) {
    errors.push(`${filename}: found prohibited Tranquil CRM integration`);
  }
}

if (errors.length) {
  console.error('External CRM egress check FAILED:');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}
console.log(`External CRM egress check passed (${inspected} source files). Existing inventory links allowed.`);
