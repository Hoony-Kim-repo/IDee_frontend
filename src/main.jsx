import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { theme } from "./theme/index.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider attribute={"class"}>
      <ChakraProvider theme={theme} value={defaultSystem}>
        <App />
      </ChakraProvider>
    </ThemeProvider>
  </StrictMode>
);
