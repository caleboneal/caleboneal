import { getCollection, type CollectionEntry } from 'astro:content';

export function buildPostNumberMap(posts: CollectionEntry<'blog'>[]): Map<string, number> {
	const sorted = [...posts].sort(
		(a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf(),
	);
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
	return (await getCollection('blog', ({ data }) => !data.draft)).sort(
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
	posts: CollectionEntry<'blog'>[],
	postId: string,
): { previous?: AdjacentPost; next?: AdjacentPost } {
	const chronological = [...posts]
		.filter(({ data }) => !data.draft)
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
