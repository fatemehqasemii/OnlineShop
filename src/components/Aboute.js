import React from "react";

import styles from "./Aboute.module.css";

import developer from "../assets/pic/developer.png";

const Aboute = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={developer} alt="developer" />
      </div>
      <div className={styles.textContainer}>
        <h1>Front-end Developer</h1>
        </div>
        <div className={styles.contact}>
          <p><span>Email:</span> fatemehqasemi750@gmail.com</p>
          <p><span>Github:</span> github.com/fatemehqasemii</p>
      </div>
    </div>
  );
};

export default Aboute;
