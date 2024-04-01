import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
