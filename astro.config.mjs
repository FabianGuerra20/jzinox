import { resolve4 } from 'node:dns/promises';
import { readdirSync, readFileSync } from 'node:fs';
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

const blogDir = new URL('./src/content/blog/', import.meta.url);
const hasPublishedPosts = readdirSync(blogDir)
	.filter((file) => file.endsWith('.md') && !file.startsWith('_'))
	.some((file) => !/^draft:\s*true\s*$/m.test(readFileSync(new URL(file, blogDir), 'utf8')));
const hiddenFromSitemap = hasPublishedPosts ? /\/(gracias|404|productos)\/?$/ : /\/(gracias|404|productos|blog)\/?$/;

export default defineConfig({
	site: siteUrl,
	trailingSlash: 'never',
	redirects: {
		'/productos': '/catalogo',
	},
	integrations: [
		sitemap({
			filter: (page) => !hiddenFromSitemap.test(page),
		}),
	],
});
