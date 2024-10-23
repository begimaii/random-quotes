import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import TipCalculator from "./TipCalculator.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <TipCalculator />
  </StrictMode>
);
