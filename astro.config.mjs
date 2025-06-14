import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://weird-science-news.com",
  integrations: [
    tailwind(),
    sitemap({
      customPages: [`${new URL("https://weird-science-news.com").origin}`],
      filter: (page) => !page.includes("404")
    }),
  ],
});
