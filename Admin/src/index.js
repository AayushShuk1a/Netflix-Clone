import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthContextProvider } from "./Context/AuthContext/AuthContext";
import { MovieContextProvider } from "./Context/MovieContext/MovieContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <MovieContextProvider>
        <App />
      </MovieContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
