/** Rough reading-time estimate from raw post source (markdown/MDX). */
export function getReadingTimeMinutes(source: string, wordsPerMinute = 220): number {
	const text = source
		.replace(/```[\s\S]*?```/g, ' ')
		.replace(/`[^`]*`/g, ' ')
		.replace(/\{\/\*[\s\S]*?\*\/\}/g, ' ')
		.replace(/<[^>]+>/g, ' ')
		.replace(/!\[[^\]]*\]\([^)]+\)/g, ' ')
		.replace(/\[[^\]]*\]\([^)]+\)/g, ' ')
		.replace(/[#>*_~|-]/g, ' ')
		.replace(/\s+/g, ' ')
		.trim();

	const words = text ? text.split(' ').length : 0;
	return Math.max(1, Math.ceil(words / wordsPerMinute));
}

export function formatReadingTime(minutes: number): string {
	return `${minutes} min read`;
}
