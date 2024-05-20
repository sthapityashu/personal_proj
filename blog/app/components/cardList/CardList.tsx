import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Cards from "../card/Cards";

const CardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.title} text-xl font-bold`}> Recent Posts</h1>
      <div className={styles.posts}>
        <Cards />
        <Cards />
        <Cards />
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;
