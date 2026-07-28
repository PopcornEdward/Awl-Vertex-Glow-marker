import { getCollection } from "astro:content";

export async function getGalleryItems() {
  const entries = await getCollection("gallery");
  return entries.map((e) => ({
    slug: e.slug,
    title: e.data.title,
    description: e.data.description || "",
    image: e.data.image,
    category: e.data.category,
  }));
}

export async function getGalleryItemsByCategory(catSlug: string) {
  const all = await getGalleryItems();
  if (catSlug === "all") return all;
  return all.filter((item) => item.category === catSlug);
}
