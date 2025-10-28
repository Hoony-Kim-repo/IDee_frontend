import yaml from "@modyfi/vite-plugin-yaml";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

// https://vite.dev/config/
export default ({ mode }) => {
  // Load env file based on 'mode' (development / production / etc)
  const env = loadEnv(mode, process.cwd(), "");

  // dev-only proxy target comes from env var (set in .env.development)
  const devProxyTarget = env.VITE_BACKEND_PROXY_TARGET;

  return defineConfig({
    plugins: [react(), yaml()],
    server: {
      // only set up the proxy for the dev server
      proxy:
        mode === "development"
          ? {
              // proxy all /api requests to backend target
              "/api": {
                target: devProxyTarget,
                changeOrigin: true,
                secure: false,
              },
            }
          : undefined,
    },
    optimizeDeps: {
      include: ["@chakra-ui/react", "@emotion/react", "@emotion/styled"],
    },
  });
};
