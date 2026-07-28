import rss from '@astrojs/rss';
import { getPublishedPosts } from '../data/blog';
import { site } from '../data/site';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
	const posts = await getPublishedPosts();

	return rss({
		title: site.name,
		description: site.description,
		site: context.site ?? site.url,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.pubDate,
			link: `/blog/${post.id}/`,
		})),
	});
}
