// Generates static JSON files for search & product listing at build time
import { readdir, readFile, mkdir, writeFile } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const __dirname = dirname(fileURLToPath(import.meta.url));
const contentDir = resolve(__dirname, "../src/content/products");
const outDir = resolve(__dirname, "../public/api");

const files = await readdir(contentDir);
const products = [];

for (const file of files) {
  if (!file.endsWith(".md")) continue;
  const raw = await readFile(resolve(contentDir, file), "utf-8");
  const { data } = matter(raw);
  const slug = file.replace(/\.md$/, "");
  products.push({
    slug,
    name: data.title || "",
    category: data.category || "",
    price: data.price || 0,
    badge: data.badge || "",
    discount: data.discount || 0,
    moq: data.moq || "",
    image: data.image || "",
    gallery: data.gallery || [],
  });
}

await mkdir(outDir, { recursive: true });

// Search index — minimal fields, for NavBar global search (fetched on demand)
const searchIndex = products.map((p) => ({
  s: p.slug,
  n: p.name,
  c: p.category,
  p: p.price,
  i: p.image,
}));
await writeFile(resolve(outDir, "search-index.json"), JSON.stringify(searchIndex));
console.log(`  search-index.json — ${searchIndex.length} products (${Math.round(JSON.stringify(searchIndex).length / 1024)}KB)`);

// All products — single file for products page (client-side filter/sort/paginate)
// Slimmer than search index: includes badge, discount, moq for card rendering
const allProducts = products.map((p) => ({
  s: p.slug,
  n: p.name,
  c: p.category,
  p: p.price,
  i: p.image,
  b: p.badge,
  d: p.discount,
  m: p.moq,
}));
await writeFile(resolve(outDir, "products-all.json"), JSON.stringify(allProducts));
console.log(`  products-all.json — ${allProducts.length} products (${Math.round(JSON.stringify(allProducts).length / 1024)}KB)`);
