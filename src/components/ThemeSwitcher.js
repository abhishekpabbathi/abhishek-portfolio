import "./ThemeSwitcher.css";
import { useTheme } from "../context/ThemeContext";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

const THEME_ICONS = {
  dark:   <BsMoonStarsFill style={{ color: "#818cf8" }} />,
  light:  <BsSunFill       style={{ color: "#f59e0b" }} />,
};

export default function ThemeSwitcher() {
  const { theme, applyTheme, themes } = useTheme();

  return (
    <div className="theme-switcher">
      {Object.entries(themes).map(([key, val]) => (
        <button
          key={key}
          className={`theme-btn ${theme === key ? "active" : ""}`}
          onClick={() => applyTheme(key)}
          title={val.name}
        >
          {THEME_ICONS[key]}
        </button>
      ))}
    </div>
  );
}