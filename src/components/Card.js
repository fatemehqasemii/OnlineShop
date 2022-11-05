import React, { useState } from "react";

// style
import styles from "./Card.module.css";

import up from "../assets/icons/up.svg";
import down from "../assets/icons/down.svg";

const Card = ({ image, name, cost }) => {
  const [counter, setCounter] = useState(0);

  const downHandler = () => {
    if (counter >= 1) {
      setCounter((prevCounter) => prevCounter - 1);
    }
  };

  const upHandler = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <div className={styles.container}>
      <img src={image} alt="smart phone" />
      <h3>{name}</h3>
      <p>{cost} {counter ? `* ${counter} = ${counter * Number(cost.split(" ")[0])} $`: ""}</p>

      <div className={styles.counter}>
        <img
          className={counter ? "" : styles.deactive}
          src={down}
          alt="arrow"
          onClick={downHandler}
        />
        <span>{counter}</span>
        <img src={up} alt="arrow" onClick={upHandler} />
      </div>
    </div>
  );
};

export default Card;
