import { defineCollection, z } from "astro:content";

const products = defineCollection({
  schema: z.object({
    sku: z.string(),
    title: z.string(),
    subtitle: z.string().optional(),
    category: z.enum([
      "nails",
      "eyelashes",
      "permanent-makeup",
      "beauty-tools",
      "daily-chemical",
      "makeup-tools",
      "hair-tools",
    ]),
    subcategory: z.string().optional(),
    price: z.number().optional(),
    pricing: z
      .array(
        z.object({
          qty: z.number(),
          price: z.number(),
        })
      )
      .optional()
      .default([]),
    stock: z.number().default(0),
    moq: z.string().optional(),
    image: z.string(),
    gallery: z.array(z.string()).optional().default([]),
    badge: z.string().optional(),
    discount: z.number().optional(),
    specs: z
      .array(z.object({ label: z.string(), value: z.string() }))
      .optional()
      .default([]),
  }),
});

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string(),
    cover: z.string().optional(),
    description: z.string(),
  }),
});

const gallery = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string(),
    category: z.enum([
      "nail-kits",
      "lash-kits",
      "pmu-kits",
      "hair-kits",
      "makeup-kits",
      "daily-kits",
      "other-kits",
    ]),
  }),
});

export const collections = { products, blog, gallery };
