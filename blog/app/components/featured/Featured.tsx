import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import natureImg from "@/app/assets/nature.jpg";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Yashu</b> Discover my stories and creative ideas
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src={natureImg} alt="" fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            voluptatibus corrupti. Qui ipsum repellat dolor eos non modi
            doloribus ab autem consectetur, eum rerum vel facilis nihil ducimus
            laborum voluptatem.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
