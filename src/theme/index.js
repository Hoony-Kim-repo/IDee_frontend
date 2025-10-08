// src/theme.js
import { createSystem, defaultConfig } from "@chakra-ui/react";

export const theme = createSystem(defaultConfig, {
  tokens: {
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
    colors: {
      bg: "var(--color-bg)",
      surface: "var(--color-surface)",
      text: "var(--color-text)",
      textMuted: "var(--color-text-muted)",
      accent: "var(--color-accent)",
      highlight: "var(--color-highlight)",
      border: "var(--color-border)",
    },
  },
  semanticTokens: {
    colors: {
      bg: {
        default: "bg",
      },
      surface: {
        default: "surface",
      },
      text: {
        default: "text",
      },
      accent: {
        default: "accent",
      },
      highlight: {
        default: "highlight",
      },
      border: {
        default: "border",
      },
    },
  },
  components: {},
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
});
