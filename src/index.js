import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import AppState from "./context/AppContext/AppState";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("main"));

root.render(
  <>
    <AppState>
    <BrowserRouter>
      <App></App>
      </BrowserRouter>
    </AppState>
  </>
);
