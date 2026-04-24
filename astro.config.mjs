// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import indexnow from 'astro-indexnow';
import sitemap from '@astrojs/sitemap';
import { mkdir, writeFile } from 'fs/promises';
import { promisify } from 'util';
import { exec } from 'child_process';

const integrations = [sitemap()];

if (process.env.INDEXNOW_KEY) {
    integrations.push(
        indexnow({
            key: process.env.INDEXNOW_KEY,
        })
    );
}

export default defineConfig({
    fonts: [
        {
            provider: fontProviders.fontsource(),
            name: 'Anonymous Pro',
            cssVariable: '--font-anonymous-pro',
        },
        {
            provider: fontProviders.fontsource(),
            name: 'Ubuntu',
            cssVariable: '--font-ubuntu',
        },
    ],
    integrations,
    site: 'https://metacyclopedia.github.io',
});
