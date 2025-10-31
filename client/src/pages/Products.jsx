import React, { Suspense, use } from "react";
import ProductCard from "../components/ProductsComponents/ProductCard";
const productsPromies = fetch("http://localhost:4000/products").then((res) =>
  res.json()
);

const Products = () => {
  const products = use(productsPromies);
  return (
    <div>
      <div>
        <h2 className="text-center text-3xl font-bold text-secondary my-4">
          Recent <span className="text-primary">Products</span>
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
