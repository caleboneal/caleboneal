export const site = {
	name: "Caleb O'Neal",
	description: "Personal site and writing by Caleb O'Neal.",
	url: 'https://caleboneal.dev',
	links: {
		x: 'https://x.com/CalebONeal07',
		linkedin: 'https://linkedin.com/in/caleboneal2007',
		github: 'https://github.com/caleboneal',
		email: 'mailto:caleb@caleboneal.dev',
		resume: '/resume.pdf',
	},
	socialLinks: [
		{ label: 'X', hrefKey: 'x', icon: 'x' },
		{ label: 'LinkedIn', hrefKey: 'linkedin', icon: 'linkedin' },
		{ label: 'GitHub', hrefKey: 'github', icon: 'github' },
		{ label: 'Email', hrefKey: 'email', icon: 'email', action: 'copy' },
		{ label: 'Resume', hrefKey: 'resume', icon: 'resume', action: 'download' },
	],
} as const;

export type SiteLinkKey = keyof typeof site.links;
export type SocialLinkIcon = (typeof site.socialLinks)[number]['icon'];
export type SocialLinkAction = 'copy' | 'download';
