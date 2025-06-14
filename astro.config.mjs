import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://weird-science-news.com",
  output: "static",
  build: {
    inlineStylesheets: "auto",
  },
  integrations: [
    tailwind(),
    sitemap({
      serialize(item) {
        if (/404/.test(item.url)) return undefined;
        return item;
      },
    }),
  ],
});
