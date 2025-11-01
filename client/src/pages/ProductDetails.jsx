import React, { useRef } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router";
import { useLoaderData } from "react-router";
import BidCard from "../components/ProductsComponents/BidCard";
import { useEffect } from "react";
import { useState } from "react";
import BidsTable from "../components/bidsComponents/BidsTable";

const ProductDetails = () => {
  const [bids, setBids] = useState([]);
  const product = useLoaderData();

  const {
    _id: productId,
    title,
    image,
    condition,
    usage,
    description,
    category,
    price_min,
    price_max,
    seller_image,
    seller_name,
    email,
    location,
    seller_contact,
    status,
  } = product;

  useEffect(() => {
    fetch(`http://localhost:4000/products/${productId}/bids`)
      .then((res) => res.json())
      .then((data) => setBids(data));
  }, [productId]);

  const postedDate = new Date(product?.created_at).toLocaleDateString();

  const modalRef = useRef();
  const openModal = () => {
    modalRef.current.showModal();
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6 md:p-10">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}

        <Link
          to="/products"
          className="mb-4 flex items-center gap-2 text-primary cursor-pointer hover:underline"
        >
          <FaArrowLeft />
          Back To Products
        </Link>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left - Image + Description */}
          <div>
            <img
              src={image}
              alt={title}
              onError={(e) => {
                e.currentTarget.src =
                  "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png";
              }}
              className="w-full h-80 object-cover rounded-xl shadow-md"
            />

            <div className="bg-white rounded-xl p-5 mt-6 shadow-md">
              <h2 className="text-lg font-semibold mb-3">
                Product Description
              </h2>
              <div className="flex justify-between text-sm text-gray-700 mb-2">
                <p>
                  <span className="font-semibold text-primary">Condition:</span>{" "}
                  {condition}
                </p>
                <p>
                  <span className="font-semibold text-primary">Usage:</span>{" "}
                  {usage}
                </p>
              </div>
              <hr className="mb-3" />
              <p className="text-gray-600 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          </div>

          {/* Right - Product Info */}
          <div className="flex flex-col gap-5">
            {/* Title */}
            <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
            <span className="badge badge-primary text-xs rounded-full">
              {category}
            </span>

            {/* Price */}
            <div className="bg-white p-5 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-green-600">
                ${price_min} - {price_max}
              </h3>
              <p className="text-gray-600 text-sm">Price starts from</p>
            </div>

            {/* Product Details */}
            <div className="bg-white p-5 rounded-xl shadow-md">
              <h3 className="font-semibold text-gray-900 mb-2">
                Product Details
              </h3>
              <p className="text-sm text-gray-700">
                <span className="font-medium">Product ID:</span>{" "}
                6904d73f9484ff6575f3ca47
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-medium">Posted:</span> {postedDate}
              </p>
            </div>

            {/* Seller Info */}
            <div className="bg-white p-5 rounded-xl shadow-md">
              <h3 className="font-semibold text-gray-900 mb-3">
                Seller Information
              </h3>
              <div className="flex items-center gap-3">
                <img
                  src={seller_image}
                  onError={(e) => {
                    e.currentTarget.src = "/person.png";
                  }}
                  alt={seller_name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-800">{seller_name}</p>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    <MdEmail /> {email}
                  </p>
                </div>
              </div>
              <div className="mt-3 text-sm text-gray-700 space-y-1">
                <p className="flex items-center gap-2">
                  <FaLocationDot className="text-primary" /> {location}
                </p>
                <p>
                  <span className="font-medium">Contact:</span> {seller_contact}
                </p>
                <p>
                  <span className="font-medium">Status:</span>{" "}
                  <span
                    className={`rounded-full badge ${
                      status === "pending" ? "badge-warning" : "badge-success"
                    }`}
                  >
                    {status}
                  </span>
                </p>
              </div>
            </div>
            <button
              onClick={openModal}
              className="btn btn-primary h-12 rounded-lg font-semibold text-base mt-4"
            >
              I Want Buy This Product
            </button>
            <BidCard
              modalRef={modalRef}
              product={product}
              bids={bids}
              setBids={setBids}
            />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h2> Bids For This Products: {bids.length}</h2>
        <div className="mt-10">
          <BidsTable
            bids={bids}
            title={title}
            price_max={price_max}
            price_min={price_max}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
