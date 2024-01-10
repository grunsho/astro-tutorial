import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://master--dreamy-cranachan-49927b.netlify.app/",
  integrations: [preact()]
});