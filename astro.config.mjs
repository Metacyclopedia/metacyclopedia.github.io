// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    fonts: [
        {
            provider: fontProviders.google(),
            name: 'Anonymous Pro',
            cssVariable: '--font-anonymous-pro',
        },
        {
            provider: fontProviders.google(),
            name: 'Ubuntu',
            cssVariable: '--font-ubuntu',
        },
    ],
});
