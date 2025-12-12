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
        white: {
          50: "#ffffff",
          100: "#fefefe",
          200: "#fcfcfc",
          300: "#fafafa",
          400: "#f7f7f7",
          500: "#f5f5f5",
          600: "#f2f2f2",
          700: "#f0f0f0",
          800: "#ededed",
          900: "#ebebeb",
        },
        black: {
          50: "#121212",
          100: "#1e1e1e",
          200: "#2b2b2b",
          300: "#373737",
          400: "#444444",
          500: "#505050",
          600: "#5c5c5c",
          700: "#696969",
          800: "#757575",
          900: "#828282",
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
          value: { base: "rgba(255,255,255, 0.8)", _dark: "rgba(0,0,0,0.8)" },
        },
        dashboardCardBg: {
          value: { base: "rgba(255,255,255, 0.8)", _dark: "rgba(0,0,0,0.8)" },
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
