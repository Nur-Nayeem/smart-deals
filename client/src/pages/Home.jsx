import React, { Suspense, use } from "react";
import { Link } from "react-router";
import ProductCard from "../components/ProductsComponents/ProductCard";
import Loading from "../components/Loading";
import axios from "axios";

const latestProductsPromise = axios
  .get("http://localhost:4000/latest-products")
  .then((data) => data.data);

const LatestProducts = () => {
  const latestProducts = use(latestProductsPromise);
  return (
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
        <Link to="/products" className="btn btn-primary">
          Show All
        </Link>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <Suspense fallback={<Loading />}>
      <LatestProducts />
    </Suspense>
  );
};

export default Home;
