// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://jzinox.cl',
	// /productos y /catalogo mostraban los mismos quince productos y competían
	// por las mismas búsquedas. Sobrevive /catalogo, que es la URL a la que
	// apuntan la portada, /servicios y el 404. El redirect 301 conserva
	// cualquier enlace que ya se haya compartido.
	redirects: {
		'/productos': '/catalogo',
	},
	integrations: [
		sitemap({
			// Fuera del sitemap lo que no debe indexarse: el acuse de recibo y el
			// error. Pedirle a Google que rastree lo que luego marcamos noindex
			// son señales contradictorias.
			filter: (page) => !/\/(gracias|404|productos)\/?$/.test(page),
		}),
	],
});
