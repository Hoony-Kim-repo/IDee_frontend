import yaml from "@modyfi/vite-plugin-yaml";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), yaml()],
  optimizeDeps: {
    include: ["@chakra-ui/react", "@emotion/react", "@emotion/styled"],
  },
});
