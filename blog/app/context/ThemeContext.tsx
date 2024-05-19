"use client";

// Default
import { createContext, useEffect, useState } from "react";
// import { createContext } from "vm";

export const ThemeContext: any = createContext("light");

const getFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
};

export const ThemeContextProvider = ({ children }: any) => {
  // States
  const [theme, setTheme] = useState<any>(() => {
    return getFromLocalStorage();
  });

  // Toogle the theme mode
  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
