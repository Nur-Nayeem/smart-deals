import React from "react";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
  return (
    <div className="p-4 bg-base-100 flex flex-col gap-2.5">
      <img
        src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
        alt=""
      />
      <p>{product.title}</p>
      <span className="text-primary text-lg font-medium">
        $ {product.price_min} - {product.price_max}
      </span>
      <Link
        to={`/products/${product._id}`}
        className="btn bg-base-100 border-[#9F62F2] text-primary font-medium"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
