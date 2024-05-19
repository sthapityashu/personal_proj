"use client";

// Defaults
import React, { useContext, useEffect, useState } from "react";

// Context
import { ThemeContext } from "@/app/context/ThemeContext";

const ThemeProvider = ({ children }: any) => {

  // Context
  const { theme }: any = useContext(ThemeContext);

  // States
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    return <div className={theme}>{children}</div>;
  }
};

export default ThemeProvider;
