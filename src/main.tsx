import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const saved = localStorage.getItem("theme");

// If user has saved preference, use it. Otherwise, use system preference.
const theme = saved || (prefersDark ? "dark" : "light");

document.documentElement.setAttribute("data-theme", theme);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
