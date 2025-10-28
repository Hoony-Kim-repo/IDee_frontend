import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { theme } from "./theme/index.js";
import { Provider } from "react-redux";
import store from "./store/index.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider attribute={"class"}>
      <ChakraProvider theme={theme} value={defaultSystem}>
        <Provider store={store}>
          <App />
        </Provider>
      </ChakraProvider>
    </ThemeProvider>
  </StrictMode>
);
