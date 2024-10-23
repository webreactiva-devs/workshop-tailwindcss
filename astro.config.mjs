import { defineConfig } from 'astro/config';
import liveCode from "astro-live-code";
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  markdown: {
    syntaxHighlight: "prism",
  },
  integrations: [
    tailwind({ config: { applyBaseStyles: false }}),
    liveCode({
      layout: "/src/components/LiveCodeLayout.astro",
    }),
    mdx(),
  ],
});