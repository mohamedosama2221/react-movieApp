import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { theme } from "./style/Theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}></ThemeProvider>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
