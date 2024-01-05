import { defineConfig, squooshImageService } from 'astro/config';

import qwikdev from "@qwikdev/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [qwikdev()],
  image: {
    service: squooshImageService()
  }
});
