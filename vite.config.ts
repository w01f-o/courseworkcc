import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: "/src/components",
      context: "/src/context",
      hooks: "/src/hooks",
      types: "/src/types",
      utils: "/src/utils",
      styles: "/src/scss/",
      routes: "/src/routes",
    },
  },
  base: "courseworkcc",
});
