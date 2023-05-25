import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SearchContextProvider } from "./context/SearchContext";
import { ConfirmContextProvider } from "./context/ConfirmContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ConfirmContextProvider>
      <SearchContextProvider>
        <App />
      </SearchContextProvider>
    </ConfirmContextProvider>
  </React.StrictMode>
);
