import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "./",
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "https://addnames.onrender.com", 
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    outDir: "dist", // default, but explicit
  },
});
