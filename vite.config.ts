import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "esnext",
    cssMinify: true,
    rollupOptions: {
      output: {
        // Split heavy vendor libraries into separately cacheable chunks
        manualChunks(id: string) {
          if (id.includes("framer-motion")) return "vendor-motion";
          if (id.includes("react") || id.includes("react-dom") || id.includes("react-router")) return "vendor-react";
        },
      },
    },
  },
});
