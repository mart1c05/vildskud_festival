// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve(__dirname, "src"),
  base: "./",
  preview: {
    host: true,
  },
  publicDir: resolve("public"),
  build: {
    outDir: resolve("dist"),
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        teamet: resolve(__dirname, "src/teamet_bag.html"),
        program: resolve(__dirname, "src/program.html"),
        arkiv: resolve(__dirname, "src/arkiv.html"),
        arrangoer: resolve(__dirname, "src/arrangoer.html"),
        billet: resolve(__dirname, "src/billet.html"),
        frivillig: resolve(__dirname, "src/frivillig.html"),
        kontakt: resolve(__dirname, "src/kontakt.html"),
        line_up: resolve(__dirname, "src/line_up.html"),
        om_vildskud: resolve(__dirname, "src/om_vildskud.html"),
        sitemap: resolve(__dirname, "src/sitemap.html"),
        
        // about: resolve(__dirname, "src/about.html"),
      },
    },
  },
});