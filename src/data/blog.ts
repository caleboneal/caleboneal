import { getCollection, type CollectionEntry } from 'astro:content';

export type BlogPost = CollectionEntry<'blog'>;

/** Live posts only — used for RSS, numbering, adjacent nav, and production routes. */
export function isPublished(post: BlogPost): boolean {
	return post.data.published === true;
}

/** Dev-only home listing state (`published: preview`). */
export function isPreview(post: BlogPost): boolean {
	return post.data.published === 'preview';
}

/**
 * Posts shown on the home Writing list.
 * Production: published only.
 * Development: published + preview.
 */
export function isListed(post: BlogPost): boolean {
	if (isPublished(post)) return true;
	return import.meta.env.DEV && isPreview(post);
}

/**
 * Posts that may be routed.
 * Production: published only (preview/draft never exist as pages).
 * Development: all posts, so drafts and previews are openable locally.
 */
export function isRoutable(post: BlogPost): boolean {
	return import.meta.env.PROD ? isPublished(post) : true;
}

export function buildPostNumberMap(posts: BlogPost[]): Map<string, number> {
	const sorted = [...posts]
		.filter(isPublished)
		.sort((a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf());
	return new Map(sorted.map((post, index) => [post.id, index + 1]));
}

export async function resolvePostByNumber(number: number) {
	const posts = await getPublishedPosts();
	const postNumbers = buildPostNumberMap(posts);
	const post = posts.find((entry) => postNumbers.get(entry.id) === number);
	if (!post) return null;
	return { post, href: `/blog/${post.id}/` };
}

export async function getPublishedPosts() {
	return (await getCollection('blog', isPublished)).sort(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
	);
}

export async function getListedPosts() {
	return (await getCollection('blog', isListed)).sort(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
	);
}

export async function getRoutablePosts() {
	return (await getCollection('blog', isRoutable)).sort(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
	);
}

export async function getPostNumberMap() {
	const posts = await getPublishedPosts();
	return buildPostNumberMap(posts);
}

export type AdjacentPost = {
	href: string;
	title: string;
};

export function getAdjacentPosts(
	posts: BlogPost[],
	postId: string,
): { previous?: AdjacentPost; next?: AdjacentPost } {
	const chronological = [...posts]
		.filter(isPublished)
		.sort((a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf());
	const index = chronological.findIndex((post) => post.id === postId);
	if (index === -1) return {};

	const previous = index > 0 ? chronological[index - 1] : undefined;
	const next = index < chronological.length - 1 ? chronological[index + 1] : undefined;

	return {
		...(previous
			? { previous: { href: `/blog/${previous.id}/`, title: previous.data.title } }
			: {}),
		...(next ? { next: { href: `/blog/${next.id}/`, title: next.data.title } } : {}),
	};
}
