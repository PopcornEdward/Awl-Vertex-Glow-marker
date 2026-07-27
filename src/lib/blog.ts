import { getCollection } from "astro:content";

export async function getAllPosts() {
  const entries = await getCollection("blog");
  return entries.map((e) => ({
    ...e.data,
    slug: e.slug,
    content: e.body || "",
    image: e.data.cover || "",
    date: e.data.date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
  }));
}

export async function getPostBySlug(slug: string) {
  const posts = await getAllPosts();
  return posts.find((p) => p.slug === slug);
}
