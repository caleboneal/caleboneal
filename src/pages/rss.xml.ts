import rss from '@astrojs/rss';
import { getPublishedPosts } from '../data/blog';
import { site } from '../data/site';
import type { APIContext } from 'astro';
import MarkdownIt from 'markdown-it';

const parser = new MarkdownIt({
	html: false,
	linkify: true,
	typographer: true,
});

export async function GET(context: APIContext) {
	const posts = await getPublishedPosts();
	const siteURL = context.site ?? site.url;

	return rss({
		title: site.name,
		description: site.description,
		site: siteURL,
		xmlns: {
			atom: 'http://www.w3.org/2005/Atom',
			media: 'http://search.yahoo.com/mrss/',
		},
		items: posts.map((post) => {
			const body = post.body ?? '';
			const content = parser.render(body);

			return {
				title: post.data.title,
				description: post.data.description,
				pubDate: post.data.pubDate,
				link: `/blog/${post.id}/`,
				content,
				customData: [
					post.data.updatedDate
						? `<atom:updated>${post.data.updatedDate.toISOString()}</atom:updated>`
						: '',
					post.data.image
						? `<media:content url="${new URL(post.data.image, siteURL).href}" medium="image" />`
						: '',
				]
					.filter(Boolean)
					.join(''),
			};
		}),
	});
}
