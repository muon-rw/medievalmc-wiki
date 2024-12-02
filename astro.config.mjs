import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://wiki.medievalmc.us',
    base: '/medievalmc-wiki',
    integrations: [
        mdx(),
        tailwind(),
        sitemap(),
    ],
});