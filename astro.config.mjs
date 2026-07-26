// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: "https://popcornedward.github.io",
  base: process.env.CI ? "/Awl-Vertex-Glow-marker" : "/",

  integrations: [react(), icon()],

  vite: {
    plugins: [tailwindcss()]
  }
});