import React, { createContext, useEffect, useState } from "react";

// Api
import { getProducts } from "../Services/api";

// Context
export const ProductsContext = createContext();

const ProductContextProvider = ({ children }) => {
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setProducts(await getProducts());
    };

    fetchApi();
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductContextProvider;
