import React from "react";
import styles from "./Loader.module.css";

export default function Loader(props) {
  return (
    <div
      className={`${styles.spinner} ${props.isprimary ? styles.welcome : ""}`}
    >
      <div className={styles.rect1}></div>
      <div className={styles.rect2}></div>
      <div className={styles.rect3}></div>
      <div className={styles.rect4}></div>
      <div className={styles.rect5}></div>
    </div>
  );
}
