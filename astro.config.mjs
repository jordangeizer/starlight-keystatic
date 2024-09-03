import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import keystatic from "@keystatic/astro";
import react from "@astrojs/react";
import AutoImport from "astro-auto-import";

import { sidebarData } from "./src/data/sidebar-data";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Keystatic Starlight",
      /* 
        The server needs to be manually restarted whenever 
        the sidebarData below is changed, since nothing 
        on this file is changing.

        Is there a way to "watch" a specific file for 
        change and trigger a server restart?
      */
      // sidebar: sidebarData,
    }),
    keystatic(),
    react(),
    AutoImport({
      imports: [{ "@astrojs/starlight/components": ["Aside"] }],
    }),
  ],
  output: "hybrid",
});
