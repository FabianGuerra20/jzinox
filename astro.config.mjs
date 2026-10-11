import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://jzinox.cl',
	redirects: {
		'/productos': '/catalogo',
	},
	integrations: [
		sitemap({
			filter: (page) => !/\/(gracias|404|productos)\/?$/.test(page),
		}),
	],
});
