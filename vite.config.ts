import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://hinoha.github.io/wnrs/',
  plugins: [react(), vanillaExtractPlugin()],
});
