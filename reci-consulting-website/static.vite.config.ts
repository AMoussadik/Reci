import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// This is a simplified Vite config for generating static files
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "static-build"),
    emptyOutDir: true,
    minify: true,
    cssMinify: true,
  },
  // Set base to './' for relative paths that work on any static host
  base: "./",
});