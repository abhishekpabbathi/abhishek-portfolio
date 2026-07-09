import { createContext, useContext, useState } from "react";

export const themes = {
  dark: {
    name: "Dark",
    icon: "🌙",
    "--bg":           "#0f0f1a",
    "--bg-secondary": "#12121f",
    "--bg-card":      "rgba(22, 22, 42, 0.8)",
    "--border":       "rgba(255,255,255,0.06)",
    "--text-primary": "#f1f5f9",
    "--text-secondary":"#94a3b8",
    "--text-muted":   "#64748b",
    "--accent":       "#6366f1",
    "--accent-2":     "#ec4899",
    "--accent-3":     "#f59e0b",
    "--navbar-bg":    "rgba(15,15,26,0.9)",
  },
  light: {
    name: "Light",
    icon: "☀️",
    "--bg":           "#f8fafc",
    "--bg-secondary": "#f1f5f9",
    "--bg-card":      "rgba(255,255,255,0.95)",
    "--border":       "rgba(0,0,0,0.08)",
    "--text-primary": "#0f172a",
    "--text-secondary":"#475569",
    "--text-muted":   "#94a3b8",
    "--accent":       "#6366f1",
    "--accent-2":     "#ec4899",
    "--accent-3":     "#f59e0b",
    "--navbar-bg":    "rgba(248,250,252,0.95)",
  },
};

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  const applyTheme = (themeName) => {
    const t = themes[themeName];
    Object.entries(t).forEach(([key, value]) => {
      if (key.startsWith("--")) {
        document.documentElement.style.setProperty(key, value);
      }
    });
    setTheme(themeName);
  };

  return (
    <ThemeContext.Provider value={{ theme, applyTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}