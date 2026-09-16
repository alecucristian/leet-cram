import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function pwaUpdaterPlugin() {
  const buildId = Date.now().toString(36) + "-" + Math.random().toString(36).substring(2, 7);
  return {
    name: "pwa-updater-plugin",
    closeBundle() {
      const swPath = path.resolve(__dirname, "dist/sw.js");
      if (fs.existsSync(swPath)) {
        let content = fs.readFileSync(swPath, "utf-8");
        content = content.replace(/__SW_VERSION__/g, buildId);
        fs.writeFileSync(swPath, content, "utf-8");
        console.log(`[PWA Plugin] Injected build version ${buildId} into dist/sw.js`);
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), pwaUpdaterPlugin()],
  base: process.env.BASE_PATH || "./",
});
