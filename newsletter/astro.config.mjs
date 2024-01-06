import { defineConfig, squooshImageService } from 'astro/config';
import netlify from '@astrojs/netlify';
import qwikdev from "@qwikdev/astro";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [qwikdev()],
  image: {
    service: squooshImageService()
  },
  adapter: netlify()
});
