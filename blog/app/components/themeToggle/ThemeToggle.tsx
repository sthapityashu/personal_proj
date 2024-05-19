"use client";

import React, { useContext } from "react";
import styles from "./themeToggle.module.css";
import Image from "next/image";
import { ThemeContext } from "@/app/context/ThemeContext";

const moon = "https://cdn-icons-png.flaticon.com/512/414/414942.png";

const sun = "https://cdn-icons-png.flaticon.com/512/169/169367.png";

const ThemeToggle = () => {
  const { theme, toggle }: any = useContext(ThemeContext);
  console.log(theme);

  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        theme === "dark" ? { backgroundColor: "white" } : { backgroundColor: "#0f172a" }
      }
    >
      <Image src={moon} width={14} height={14} alt="moon_png" />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 1, backgroundColor: "#0f172a" }
            : { right: 1, backgroundColor: "white" }
        }
      ></div>
      <Image src={sun} width={14} height={14} alt="moon_png" />
    </div>
  );
};

export default ThemeToggle;
