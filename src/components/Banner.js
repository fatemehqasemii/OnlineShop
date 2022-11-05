import React from "react";

// picture
import banner from "../assets/pic/banner.jpg";

// Styles
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.container}>
      <img src={banner} alt="banner" />
      <div className={styles.textContainer}>
        <h1>WHIT ME</h1>
        <p>fashion style webSite</p>
      </div>
    </div>
  );
};

export default Banner;
