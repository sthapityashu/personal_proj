"use client";

import { createContext, useState } from "react";
// import { createContext } from "vm";

export const ThemeContext: any = createContext("");

const getFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
};

export const ThemeContextProvider = ({ children }: any) => {
  const [theme, setTheme] = useState(() => {
    return getFromLocalStorage();
  });

  return (
    <ThemeContext.Provider value={{theme}}>{children}</ThemeContext.Provider>
  );
};
