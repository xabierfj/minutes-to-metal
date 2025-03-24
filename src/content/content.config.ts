import { defineCollection, z } from "astro:content";

const music = defineCollection({
  schema: z.object({
    title: z.string(),
    artist: z.string(),
    image: z.string(),
    price: z.number(),
    description: z.string(),
    type: z.enum(["CD", "Vinyl"]),
    isPreOder: z.boolean(),
  }),
}); 

const artists = defineCollection({
  schema: z.object({
    name: z.string(),
    image: z.string(),
    description: z.string(),
    genre: z.string(),
  })
});

export const collections = { music, artists}