import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/base.css";
import "./styles/layout.css";
import "./styles/components.css";
import App from "./App.jsx";
import { TodosProvider } from "./context/TodosContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TodosProvider>
      <App />
    </TodosProvider>
  </StrictMode>
);
