import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <h2>Facebook</h2>
        <h2>Instagram</h2>
        <h2>Linkedin</h2>
      </div>
      <div className={styles.logo}>Yashu Blog</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/">Homepage</Link>
        <Link href="/">Contact</Link>
        <Link href="/">About</Link>

        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
