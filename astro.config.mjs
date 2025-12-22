import { defineConfig } from 'astro/config';

export default defineConfig({
  // Tailwind is configured via PostCSS (`postcss.config.js`) + `src/styles/global.css`.
  output: 'static',
  vite: {
    ssr: {
      external: [],
    },
  },
});
