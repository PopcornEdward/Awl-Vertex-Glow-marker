import { getCollection } from "astro:content";

export interface PricingTier {
  qty: number;
  price: number;
}

export function getEffectivePrice(pricing: PricingTier[], quantity: number): number | null {
  if (!pricing || pricing.length === 0) return null;
  const sorted = [...pricing].sort((a, b) => b.qty - a.qty);
  for (const tier of sorted) {
    if (quantity >= tier.qty) return tier.price;
  }
  return pricing[pricing.length - 1].price;
}

export function getPriceRange(pricing: PricingTier[]): { min: number; max: number } | null {
  if (!pricing || pricing.length === 0) return null;
  const prices = pricing.map((t) => t.price);
  return { min: Math.min(...prices), max: Math.max(...prices) };
}

export async function getAllProducts() {
  const entries = await getCollection("products");
  return entries.map((e) => ({
    id: e.data.sku,
    name: e.data.title,
    title: e.data.subtitle || e.data.title,
    price: e.data.pricing?.[0]?.price ?? e.data.price ?? 0,
    pricing: (e.data.pricing || []) as PricingTier[],
    description: e.body || "",
    category: e.data.category,
    subcategory: e.data.subcategory,
    stock: e.data.stock,
    images: [e.data.image, ...(e.data.gallery || []).map((g) => typeof g === "string" ? g : g.image)],
    slug: e.slug,
    badge: e.data.badge,
    discount: e.data.discount,
    specs: e.data.specs,
    moq: e.data.moq,
  }));
}

export async function getFeaturedProducts() {
  const all = await getAllProducts();
  return all
    .filter((p) => p.badge === "Hot Seller" || p.badge === "Bestseller")
    .slice(0, 8);
}

export async function getProductBySlug(slug: string) {
  const all = await getAllProducts();
  return all.find((p) => p.slug === slug);
}

export async function getRelatedProducts(category: string, currentSlug: string) {
  const all = await getAllProducts();
  return all
    .filter((p) => p.category === category && p.slug !== currentSlug)
    .slice(0, 4);
}

export async function getProductsByCategory(catSlug: string) {
  const all = await getAllProducts();
  return all.filter((p) => p.category === catSlug);
}
