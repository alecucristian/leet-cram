import React from "react";
import ReactDOM from "react-dom/client";
import App from "../leetcode-app.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./sw.js")
      .then((reg) => {
        console.log("LeetCram PWA Service Worker registered with scope:", reg.scope);
      })
      .catch((err) => {
        console.warn("LeetCram PWA Service Worker registration failed:", err);
      });
  });
}

