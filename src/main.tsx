import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Analytics } from "@vercel/analytics/react";
import App from "./app/App.tsx";
import PasswordGate from "./app/components/PasswordGate";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <PasswordGate>
      <App />
    </PasswordGate>
    <Analytics />
  </BrowserRouter>
);
