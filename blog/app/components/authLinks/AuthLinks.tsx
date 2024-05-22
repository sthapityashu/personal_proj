"use client";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./authLinks.module.css";
import { signOut } from "next-auth/react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const status = "authenticated";
  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/href" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            Write
          </Link>
          <span className={styles.link} onClick={signOut}>
            Logout
          </span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/">Contact</Link>
          <Link href="/">About</Link>
          {status === "notauthenticated" ? (
            <Link href="/href">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <button className={styles.link} onClick={signOut}>
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
