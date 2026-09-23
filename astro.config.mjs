// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://jzinox.cl',
	integrations: [
		sitemap({
			// Fuera del sitemap lo que no debe indexarse: el acuse de recibo y el
			// error. Pedirle a Google que rastree lo que luego marcamos noindex
			// son señales contradictorias.
			filter: (page) => !/\/(gracias|404)\/?$/.test(page),
		}),
	],
});
