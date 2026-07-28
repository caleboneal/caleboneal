export type Theme = 'light' | 'dark';

const PHASE_MS = 1200;

export function getPreferredTheme(): Theme {
	const stored = localStorage.getItem('theme');
	if (stored === 'light' || stored === 'dark') return stored;
	return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

export function setTheme(theme: Theme) {
	document.documentElement.setAttribute('data-theme', theme);
	localStorage.setItem('theme', theme);
}

function prefersReducedMotion() {
	return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function waitForAnimation(stage: HTMLElement, names: string[]) {
	return new Promise<void>((resolve) => {
		const onEnd = (event: AnimationEvent) => {
			if (event.target !== stage || !names.includes(event.animationName)) return;
			stage.removeEventListener('animationend', onEnd);
			resolve();
		};
		stage.addEventListener('animationend', onEnd);
		window.setTimeout(() => {
			stage.removeEventListener('animationend', onEnd);
			resolve();
		}, PHASE_MS + 100);
	});
}

export async function toggleTheme() {
	const next: Theme =
		document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';

	const stage = document.querySelector<HTMLElement>('.orbit-stage');

	if (!stage || prefersReducedMotion()) {
		setTheme(next);
		return;
	}

	if (stage.dataset.themeAnimating === 'true') return;
	stage.dataset.themeAnimating = 'true';

	stage.classList.remove('starburst-enter', 'theme-set-down', 'theme-set-up');
	void stage.offsetWidth;

	stage.classList.add('theme-set-down');
	await waitForAnimation(stage, ['hero-starburst-set-down', 'hero-starburst-set-down-mobile']);

	stage.classList.remove('theme-set-down');
	stage.style.transform = 'translateY(52%)';
	if (window.matchMedia('(max-width: 768px)').matches) {
		stage.style.transform = 'translateY(48%)';
	}
	setTheme(next);
	void stage.offsetWidth;

	stage.classList.add('theme-set-up');
	stage.style.transform = '';
	await waitForAnimation(stage, ['hero-starburst-set-up', 'hero-starburst-set-up-mobile']);

	stage.classList.remove('theme-set-up');
	stage.dataset.themeAnimating = 'false';
}
