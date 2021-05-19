import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/normalize.css";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material-ocean.css";
import "codemirror/theme/liquibyte.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import App from "./App";
import { ThemeProvider } from "styled-components";
import Theme from "./theme/theme";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
