import sharp from 'sharp';
import { mkdirSync } from 'fs';

const W = 1200;
const H = 630;
const cx = 780;
const cy = 315;
const burstInner = 66;
const rayCount = 36;
const bg = '#fdf5ed';
const orange = '#c45a6a';
const rose = '#e07a3a';

function rayOuterRadius(index) {
	const lengthSeed = Math.sin((index + 1) * 1.9) * 0.5 + Math.cos((index + 2) * 0.73) * 0.5;
	return 142 + ((lengthSeed + 1) / 2) * 64;
}

function point(radius, deg) {
	const rad = (deg * Math.PI) / 180;
	return {
		x: +(cx + radius * Math.cos(rad)).toFixed(2),
		y: +(cy + radius * Math.sin(rad)).toFixed(2),
	};
}

const burstOuter = Math.max(...Array.from({ length: rayCount }, (_, i) => rayOuterRadius(i)));
const burstEdge = burstOuter * 0.88;

const rays = Array.from({ length: rayCount }, (_, i) => {
	const deg = i * (360 / rayCount);
	const outer = rayOuterRadius(i);
	const spread = 1.7 + ((Math.sin((i + 4) * 1.17) + 1) / 2) * 2.6;
	const tip = point(outer, deg);
	const left = point(burstInner, deg - spread);
	const right = point(burstInner, deg + spread);
	return `<g>
		<line x1="${tip.x}" y1="${tip.y}" x2="${left.x}" y2="${left.y}" stroke="url(#warm)" stroke-width="1.8" />
		<line x1="${tip.x}" y1="${tip.y}" x2="${right.x}" y2="${right.y}" stroke="url(#warm)" stroke-width="1.8" />
	</g>`;
}).join('');

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
	<defs>
		<linearGradient id="warm" x1="560" y1="120" x2="1000" y2="500" gradientUnits="userSpaceOnUse">
			<stop offset="0%" stop-color="${orange}"/>
			<stop offset="42%" stop-color="${rose}"/>
			<stop offset="78%" stop-color="${orange}"/>
			<stop offset="100%" stop-color="${rose}"/>
		</linearGradient>
		<radialGradient id="radial" cx="${cx}" cy="${cy}" r="${burstEdge}" gradientUnits="userSpaceOnUse">
			<stop offset="0%" stop-color="${rose}"/>
			<stop offset="55%" stop-color="${orange}"/>
			<stop offset="100%" stop-color="${rose}"/>
		</radialGradient>
		<radialGradient id="glow" cx="${cx}" cy="${cy}" r="180" gradientUnits="userSpaceOnUse">
			<stop offset="0%" stop-color="${orange}" stop-opacity="0.18"/>
			<stop offset="55%" stop-color="${rose}" stop-opacity="0.08"/>
			<stop offset="100%" stop-color="${rose}" stop-opacity="0"/>
		</radialGradient>
	</defs>
	<rect width="${W}" height="${H}" fill="${bg}"/>
	<circle cx="${cx}" cy="${cy}" r="180" fill="url(#glow)"/>
	<g opacity="0.95">
		<circle cx="${cx}" cy="${cy}" r="128" fill="none" stroke="url(#radial)" stroke-width="1.8"/>
		<circle cx="${cx}" cy="${cy}" r="${burstInner}" fill="none" stroke="url(#radial)" stroke-width="1.5"/>
		<circle cx="${cx}" cy="${cy}" r="${burstEdge}" fill="none" stroke="url(#radial)" stroke-width="1.7"/>
		${rays}
	</g>
	<text x="88" y="292" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="54" font-weight="700" fill="#111111" letter-spacing="-1.2">Caleb O'Neal</text>
	<text x="88" y="348" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="26" font-weight="500" fill="#6b6b6b">Personal site and writing</text>
</svg>`;

mkdirSync('public', { recursive: true });
await sharp(Buffer.from(svg)).png().toFile('public/og-default.png');
console.log('wrote public/og-default.png');
