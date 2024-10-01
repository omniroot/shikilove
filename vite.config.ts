import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@features": path.resolve(__dirname, "src", "components", "features"),
      "@widgets": path.resolve(__dirname, "src", "components", "widgets"),
      "@ui": path.resolve(__dirname, "src", "components", "ui"),
      "@": path.resolve(__dirname, "src"),
      "/": path.resolve(__dirname),
    },
  },
});
