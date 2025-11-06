import React, { useEffect, useState } from "react";
import { ProductsContext } from "./Context";

const ProductContextProvider = ({ children }) => {
  const [productsLoading, setProductsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://smart-deals-api-server-nur-nayeem.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setProductsLoading(false);
      });
  }, []);
  const productsInfo = { products, setProducts, productsLoading };
  return <ProductsContext value={productsInfo}>{children}</ProductsContext>;
};

export default ProductContextProvider;
