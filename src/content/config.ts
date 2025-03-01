// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';
import type { NonUndefined } from 'react-hook-form';
// 2. Define your collection(s)
const presentationSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  tags: z.array(z.string()).optional(),
  image: z.string().url(),
  alt: z.string().optional(),
  author: z.string().optional(),
  presentationDate: z.string().pipe(z.coerce.date()).optional(),
  background: z.string().optional()
})

const presentations = defineCollection({
  type: 'content',
  schema: presentationSchema
});

export type Presentation = z.infer<typeof presentationSchema>

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    image: z.string().url().optional(),
    alt: z.string().optional(),
    author: z.string().optional(),
    postDate: z.string().optional(),
  })
})
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'presentations': presentations,
  'posts': posts
};
