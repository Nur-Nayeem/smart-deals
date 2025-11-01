import React, { useEffect, useState } from "react";
import { ProductsContext } from "./Context";

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  const productsInfo = { products, setProducts };
  return <ProductsContext value={productsInfo}>{children}</ProductsContext>;
};

export default ProductContextProvider;
