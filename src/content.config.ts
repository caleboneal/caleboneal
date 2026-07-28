import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
	schema: z
		.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			published: z.union([z.boolean(), z.literal('preview')]).default(false),
			image: z.string().optional(),
		})
		.refine((data) => !data.updatedDate || data.updatedDate.valueOf() >= data.pubDate.valueOf(), {
			message: 'updatedDate must be on or after pubDate',
			path: ['updatedDate'],
		}),
});

export const collections = { blog };
