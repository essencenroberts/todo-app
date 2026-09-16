import { useTheme } from "../contexts/ThemeContext";

function ThemeToggleButton() {
  // get current theme and toggleTheme
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {theme === "light"
        ? "Switch to Dark Mode"
        : "Switch to Light Mode"}
    </button>
  );
}

export default ThemeToggleButton;