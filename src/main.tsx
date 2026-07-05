import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./app/App.tsx";
import PasswordGate from "./app/components/PasswordGate";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <PasswordGate>
      <App />
    </PasswordGate>
  </BrowserRouter>
);
