import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";

// context
import { ProductsContext } from "../Context/ProductContextProvider";

// style
import styles from "./ProductDetailes.module.css";

const ProductDetailes = (props) => {
  const params = useParams();
  const id = params.id;
  const data = useContext(ProductsContext);
  const products = data[id - 1];
  const { image, title, price, description, category } = products;

  return (
    <div className={styles.container}>
        <img className={styles.image} src={image} alt="product" />
        <div className={styles.textContainer}>
            <h3>{title}</h3>
            <p className={styles.description}>{description}</p>
            <p className={styles.category}><span>Category:</span> {category}</p>
            <div className={styles.buttonContainer}>
                <span className={styles.price}>{price} $</span>
                <Link to="/products">Back to Shop</Link>
            </div>
        </div>
    </div>
);
};

export default ProductDetailes;