import React from "react";
import { Link, useLoaderData } from "react-router";
import ProductCard from "../components/ProductsComponents/ProductCard";

const Home = () => {
  const latestProducts = useLoaderData();
  console.log(latestProducts);

  return (
    <div>
      <div>
        <h2 className="text-center text-3xl font-bold text-secondary my-4">
          Recent <span className="text-primary">Products</span>
        </h2>
        <div className="grid grid-cols-3 gap-2.5">
          {latestProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
        <div className="w-full flex justify-center my-4">
          <Link to={"/products"} className="btn btn-primary">
            Show All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
