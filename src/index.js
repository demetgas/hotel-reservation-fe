import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SearchContextProvider } from "./context/SearchContext";
import { ConfrimContextProvider } from "./context/ConfirmContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ConfrimContextProvider>
      <SearchContextProvider>
        <App />
      </SearchContextProvider>
    </ConfrimContextProvider>
  </React.StrictMode>
);
