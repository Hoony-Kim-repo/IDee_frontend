import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";
import store from "./store/index.js";
import { theme } from "./theme/index.js";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute={"class"}>
        <ChakraProvider theme={theme} value={defaultSystem}>
          <Provider store={store}>
            <App />
          </Provider>
        </ChakraProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
