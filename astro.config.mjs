import { resolve4 } from 'node:dns/promises';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const fallbackUrl = 'https://jzinox.vercel.app';
const vercelDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const wantedUrl = process.env.SITE_URL || (vercelDomain ? `https://${vercelDomain}` : fallbackUrl);

const resolves = (url) =>
	resolve4(new URL(url).hostname).then(
		(addresses) => addresses.length > 0,
		() => false,
	);

const siteUrl = (await resolves(wantedUrl)) ? wantedUrl : fallbackUrl;

export default defineConfig({
	site: siteUrl,
	trailingSlash: 'never',
	redirects: {
		'/productos': '/catalogo',
	},
	integrations: [
		sitemap({
			filter: (page) => !/\/(gracias|404|productos)\/?$/.test(page),
			lastmod: new Date(),
		}),
	],
});
