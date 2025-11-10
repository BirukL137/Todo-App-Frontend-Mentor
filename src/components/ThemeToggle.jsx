import useTodos from "../hooks/useTodos";

export default function ThemeToggle() {
  const { theme, dispatch } = useTodos();
  const iconSrc =
    theme === "light" ? "/assets/icon-moon.svg" : "/assets/icon-sun.svg";

  return (
    <button
      className="theme-toggle"
      onClick={() => dispatch({ type: "toggleTheme" })}
      aria-label="Toggle theme"
    >
      <img src={iconSrc} alt="Toggle theme" />
    </button>
  );
}
