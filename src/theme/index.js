// src/theme/index.js
import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          50: "#f8f2ff",
          100: "#f0e5ff",
          200: "#e0ccff",
          300: "#d1b3ff",
          400: "#c299ff",
          500: "#b380ff",
          600: "#a366ff",
          700: "#9352e6",
          800: "#7a3dbf",
          900: "#602a99",
        },
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        text: "var(--color-text)",
        textMuted: "var(--color-text-muted)",
        accent: "var(--color-accent)",
        highlight: "var(--color-highlight)",
        border: "var(--color-border)",
      },
      fonts: {
        body: "var(--font-family)",
        heading: "var(--font-family)",
      },
      radii: {
        md: "var(--radius)",
      },
      shadows: {
        soft: "var(--shadow-soft)",
      },
    },
    semanticTokens: {
      colors: {
        bg: { value: "{colors.bg}" },
        surface: { value: "{colors.surface}" },
        text: { value: "{colors.text}" },
        accent: { value: "{colors.accent}" },
        highlight: { value: "{colors.highlight}" },
        border: { value: "{colors.border}" },

        dashboardHeroStart: {
          value: { base: "{colors.brand.200}", _dark: "{colors.brand.400}" },
        },
        dashboardHeroEnd: {
          value: { base: "{colors.brand.100}", _dark: "{colors.brand.300}" },
        },

        dashboardCardBg: {
          value: { base: "whiteAlpha.200", _dark: "blackAlpha.400" },
        },
      },
    },
    styles: {
      global: {
        "html, body": {
          bg: "bg",
          color: "text",
          transition:
            "background-color 0.25s ease-in-out, color 0.25s ease-in-out",
        },
        "*": {
          boxSizing: "border-box",
        },
      },
    },
    config: {
      initialColorMode: "light",
      useSystemColorMode: true,
    },
  },
});

export const system = createSystem(defaultConfig, config);
