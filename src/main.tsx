import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import lightTheme from "./theme/theme.light";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const GlobalStyles = createGlobalStyle`
  body {
    height: 100vh;
    margin: 0 20%;
    padding: 0;
    background: ${lightTheme.background};
  }
  
  #root {
    display: flex;
    flex-direction: column;
    height: 100%;
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
