import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Cards = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2024 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <h1 className={`text-xl font-bold`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus id
          nisi optio ex voluptatibus, enim maiores nemo, esse sapiente unde
          neque laudantium temporibus deserunt est consequuntur perspiciatis
          vitae qui. Sunt!
        </p>
        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Cards;
