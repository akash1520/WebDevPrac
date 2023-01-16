import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App1 from "./comps/App1";
import App2 from "./comps/App2";

// import App from "./components/App";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App2 />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)