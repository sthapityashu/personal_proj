import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={`${styles.container} flex justify-between pb-10`}>
      <div
        className={`${styles.info} flex flex-1 flex-col gap-[14px] justify-items-start`}
      >
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="" width={50} height={50} />
          <h1 className={styles.logoText}>Yashu Blog</h1>
        </div>
        <div className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum quis
          corporis repellendus dolor dignissimos, repellat officiis veniam sequi
          suscipit et iusto, illo autem aliquam? Excepturi ipsum tempore id odit
          sit.
        </div>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="" width={18} height={18} />
          <Image src="/instagram.png" alt="" width={18} height={18} />
          <Image src="/youtube.png" alt="" width={18} height={18} />
        </div>
      </div>

      <div className={`${styles.links} flex flex-1 flex-row`}>
        <div className={`${styles.list} flex flex-col`}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={`${styles.list} flex flex-col`}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
