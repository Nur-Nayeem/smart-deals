import React from "react";

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
      <button className="btn bg-base-100 border-[#9F62F2] text-primary font-medium">
        View Details
      </button>
    </div>
  );
};

export default ProductCard;
