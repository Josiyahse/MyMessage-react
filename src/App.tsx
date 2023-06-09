import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import Routes from "./Routes";

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={Routes} />
    </React.StrictMode>
  );
}

export default App;
