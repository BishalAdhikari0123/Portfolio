import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const SITE_URL = "https://bishaladhikari1.com.np";

const staticRoutes = [
  "/",
  "/about",
  "/contact",
  "/projects",
  "/blog",
  "/posts",
  "/tutorials",
  "/privacy-policy",
  "/terms",
];

function extractSlugs(filePath) {
  const file = fs.readFileSync(filePath, "utf8");
  const slugRegex = /slug:\s*"([^"]+)"/g;
  const slugs = new Set();

  let match;
  while ((match = slugRegex.exec(file)) !== null) {
    slugs.add(match[1]);
  }

  return [...slugs];
}

function toUrlTag(route) {
  return `  <url><loc>${SITE_URL}${route}</loc></url>`;
}

function generate() {
  const projectSlugs = extractSlugs(path.join(ROOT, "src", "data", "projects.ts"));
  const postSlugs = extractSlugs(path.join(ROOT, "src", "data", "posts.ts"));

  const allRoutes = [
    ...staticRoutes,
    ...projectSlugs.map((slug) => `/projects/${slug}`),
    ...postSlugs.map((slug) => `/posts/${slug}`),
  ];

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...allRoutes.map(toUrlTag),
    "</urlset>",
    "",
  ].join("\n");

  const outPath = path.join(ROOT, "public", "sitemap.xml");
  fs.writeFileSync(outPath, xml, "utf8");

  console.log(`Sitemap generated with ${allRoutes.length} URLs: ${outPath}`);
}

generate();
