"use client";

import React, { useContext } from "react";
import styles from "./themeToggle.module.css";
import Image from "next/image";
import { ThemeContext } from "@/app/context/ThemeContext";

const moon = "https://cdn-icons-png.flaticon.com/512/414/414942.png";

const sun = "https://cdn-icons-png.flaticon.com/512/169/169367.png";

const ThemeToggle = () => {
  const { theme }: any = useContext(ThemeContext);
  console.log(theme);

  return (
    <div className={styles.container}>
      <Image src={moon} width={14} height={14} alt="moon_png" />
      <div className={styles.ball}></div>
      <Image src={sun} width={14} height={14} alt="moon_png" />
    </div>
  );
};

export default ThemeToggle;
