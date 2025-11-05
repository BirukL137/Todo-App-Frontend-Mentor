import { useTodos } from "../context/TodosContext";

export default function ThemeToggle() {
  const { theme, dispatch } = useTodos();
  return (
    <button
      className="theme-toggle"
      onClick={() => dispatch({ type: "toggleTheme" })}
      aria-label="Toggle theme"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}
