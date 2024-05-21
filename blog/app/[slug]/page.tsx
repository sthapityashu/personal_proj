import React from "react";
import styles from "./singlePage.module.css";
import Menu from "../components/menu/Menu";
import Image from "next/image";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image
                src="/p1.jpeg"
                alt=""
                className={styles.avatar}
                width={50}
                height={50}
              />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Yashu Sthapit</span>
              <span className={styles.date}>11-11-2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/p1.jpeg"
            alt=""
            className={styles.image}
            width={400}
            height={30}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              fugiat id minus itaque atque ipsa eius dignissimos? Similique
              delectus repellat assumenda, dignissimos sint, molestiae modi eum
              voluptate totam vel nobis?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              fugiat id minus itaque atque ipsa eius dignissimos? Similique
              delectus repellat assumenda, dignissimos sint, molestiae modi eum
              voluptate totam vel nobis?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              fugiat id minus itaque atque ipsa eius dignissimos? Similique
              delectus repellat assumenda, dignissimos sint, molestiae modi eum
              voluptate totam vel nobis?
            </p>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
