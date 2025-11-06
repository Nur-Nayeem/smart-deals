import React, { useContext } from "react";
import ProductCard from "../components/ProductsComponents/ProductCard";
import { ProductsContext } from "../Context/Context";
import Loading from "../components/Loading";

const Products = () => {
  const { products, productsLoading } = useContext(ProductsContext);

  if (productsLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h2 className="text-center text-3xl font-bold text-secondary my-4">
        All <span className="text-primary">Products</span>
      </h2>
      <div className="grid grid-cols-3 gap-2.5">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
