// src/context/ThemeContext.jsx (CORRECTED LOGIC)
import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

const isValidTheme = (value) => value === "light" || value === "dark";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");

      // 1. VALIDATE savedTheme before returning it
      if (savedTheme && isValidTheme(savedTheme)) {
        return savedTheme;
      }

      // 2. Fallback to system preference
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
      }
    }
    // 3. Final fallback
    return "light";
  });

  // ... (useEffect remains correct)
  useEffect(() => {
    const root = window.document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  // 3. Toggle Function (Remains correct, but ensure it's toggling expected values)
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
