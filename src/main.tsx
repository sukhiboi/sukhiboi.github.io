import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import lightTheme from "./theme/theme.light";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0 20%;
    padding: 0;
    background: ${lightTheme.background};
  }
`;

const router = createBrowserRouter([{ path: "/", element: <Home /> }]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
