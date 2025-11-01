import React, { Suspense, use } from "react";
import ProductCard from "../components/ProductsComponents/ProductCard";
import { ProductsContext } from "../Context/Context";

const Products = () => {
  const { products } = use(ProductsContext);
  return (
    <div>
      <div>
        <h2 className="text-center text-3xl font-bold text-secondary my-4">
          All <span className="text-primary">Products</span>
        </h2>
        <Suspense fallback={<h3>Loading...</h3>}>
          <div className="grid grid-cols-3 gap-2.5">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </Suspense>
      </div>
    </div>
  );
};

export default Products;
