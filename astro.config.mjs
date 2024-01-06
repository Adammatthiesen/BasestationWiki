import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Basestation Wiki',
			sidebar: [
				{ label: 'Guides', items: [
				    // Each item here is one entry in the navigation menu.
				    { label: 'Emby', items: [
							{ label: 'Emby Client Setup', link: '/guides/emby-setup/' },
						 ], },
					{ label: 'Batocera', items: [
					    	{ label: 'Wi-Fi Conifguration', link: '/guides/batocera/wifi-config'},
							{ label: 'Controller Setup', link: '/guides/batocera/controller-setup'},
					  	], }, ], },
				{ label: 'Reference', autogenerate: { directory: 'reference' }, }, ],
		}),
	],
});
