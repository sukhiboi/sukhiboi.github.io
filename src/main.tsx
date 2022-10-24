import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import lightTheme from "./theme/theme.light";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${lightTheme.background};
  }
`;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
