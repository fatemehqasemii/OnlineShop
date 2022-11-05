import React, { useState } from "react";

// Components
import Card from "./Card";

// styles
import styles from "./Cards.module.css";

// images
import Card1 from "../assets/pic/card1.jpg";
import Card2 from "../assets/pic/card2.jpg";
import Card3 from "../assets/pic/Card3.jpg";
import Card4 from "../assets/pic/card4.jpg";

const Cards = () => {
  const [state] = useState([
    { id: 1, image: Card1, name: "fashion Style", cost: "600 $" },
    { id: 2, image: Card2, name: "fashion Style", cost: "700 $" },
    { id: 3, image: Card3, name: "fashion Style", cost: "800 $" },
    { id: 4, image: Card4, name: "fashion Style", cost: "590 $" },
  ]);

  return (
    <div className={styles.container}>
      {state.map((item) => (
        <Card
          key={item.id}
          image={item.image}
          name={item.name}
          cost={item.cost}
        />
      ))}
    </div>
  );
};

export default Cards;
