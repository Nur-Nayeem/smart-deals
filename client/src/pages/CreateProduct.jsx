import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

const CreateProduct = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    price_min: "",
    price_max: "",
    condition: "Brand New",
    usage: "",
    image: "",
    seller_name: "",
    seller_email: "",
    seller_contact: "",
    seller_image: "",
    location: "",
    description: "",
  });

  const resetFields = () => {
    setFormData({
      title: "",
      category: "",
      price_min: "",
      price_max: "",
      condition: "Brand New",
      usage: "",
      image: "",
      seller_name: "",
      seller_email: "",
      seller_contact: "",
      seller_image: "",
      location: "",
      description: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        resetFields();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6 md:p-10">
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        <Link
          to="/products"
          className="mb-4 flex items-center gap-2 text-primary cursor-pointer hover:underline"
        >
          <FaArrowLeft /> <span>Back To Products</span>
        </Link>

        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-6">
          Create <span className="text-primary">A Product</span>
        </h1>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 md:p-8 rounded-xl shadow-md space-y-4"
        >
          {/* Title + Category */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="label text-sm font-medium">Title</label>
              <input
                type="text"
                name="title"
                placeholder="e.g. Yamaha Fz Guitar for Sale"
                value={formData.title}
                onChange={handleChange}
                className="input input-bordered w-full focus:border-primary focus:border-2 outline-0"
                required
              />
            </div>

            <div>
              <label className="label text-sm font-medium">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:border-2 focus:border-primary focus:outline-none"
                required
              >
                <option value="">Select a Category</option>
                <option>Electronics</option>
                <option>Furniture</option>
                <option>Vehicles</option>
                <option>Art and Hobbies</option>
                <option>Sports</option>
              </select>
            </div>
          </div>

          {/* Price */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="label text-sm font-medium">
                Min Price You want to Sale ($)
              </label>
              <input
                type="number"
                name="price_min"
                placeholder="e.g. 18.5"
                value={formData.price_min}
                onChange={handleChange}
                className="input input-bordered w-full focus:border-primary focus:border-2 outline-0"
                required
              />
            </div>

            <div>
              <label className="label text-sm font-medium">
                Max Price You want to Sale ($)
              </label>
              <input
                type="number"
                name="price_max"
                placeholder="Optional (default = Min Price)"
                value={formData.price_max}
                onChange={handleChange}
                className="input input-bordered w-full focus:border-primary focus:border-2 outline-0"
              />
            </div>
          </div>

          {/* Condition + Usage */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="label text-sm font-medium">
                Product Condition
              </label>
              <div className="flex items-center gap-6 mt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="condition"
                    value="Brand New"
                    checked={formData.condition === "Brand New"}
                    onChange={handleChange}
                    className="radio radio-primary"
                  />
                  <span>Brand New</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="condition"
                    value="Used"
                    checked={formData.condition === "Used"}
                    onChange={handleChange}
                    className="radio radio-primary"
                  />
                  <span>Used</span>
                </label>
              </div>
            </div>

            <div>
              <label className="label text-sm font-medium">
                Product Usage Time
              </label>
              <input
                type="text"
                name="usage"
                placeholder="e.g. 1 year 3 month"
                value={formData.usage}
                onChange={handleChange}
                className="input input-bordered w-full focus:border-primary focus:border-2 outline-0"
              />
            </div>
          </div>

          {/* Image URL */}
          <div>
            <label className="label text-sm font-medium">
              Your Product Image URL
            </label>
            <input
              type="text"
              name="image"
              placeholder="https://..."
              value={formData.image}
              onChange={handleChange}
              className="input input-bordered w-full focus:border-primary focus:border-2 outline-0"
              required
            />
          </div>

          {/* Seller Info */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="label text-sm font-medium">Seller Name</label>
              <input
                type="text"
                name="seller_name"
                placeholder="e.g. Artisan Roasters"
                value={formData.seller_name}
                onChange={handleChange}
                className="input input-bordered w-full focus:border-primary focus:border-2 outline-0"
                required
              />
            </div>

            <div>
              <label className="label text-sm font-medium">Seller Email</label>
              <input
                type="email"
                name="seller_email"
                placeholder="e.g. example@mail.com"
                value={formData.seller_email}
                onChange={handleChange}
                className="input input-bordered w-full focus:border-primary focus:border-2 outline-0"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="label text-sm font-medium">
                Seller Contact
              </label>
              <input
                type="text"
                name="seller_contact"
                placeholder="e.g. +1-555-1234"
                value={formData.seller_contact}
                onChange={handleChange}
                className="input input-bordered w-full focus:border-primary focus:border-2 outline-0"
                required
              />
            </div>

            <div>
              <label className="label text-sm font-medium">
                Seller Image URL
              </label>
              <input
                type="text"
                name="seller_image"
                placeholder="https://..."
                value={formData.seller_image}
                onChange={handleChange}
                className="input input-bordered w-full focus:border-primary focus:border-2 outline-0"
              />
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="label text-sm font-medium">Location</label>
            <input
              type="text"
              name="location"
              placeholder="City, Country"
              value={formData.location}
              onChange={handleChange}
              className="input input-bordered w-full focus:border-primary focus:border-2 outline-0"
              required
            />
          </div>

          <div>
            <label className="label text-sm font-medium">
              Simple Description about your Product
            </label>
            <textarea
              name="description"
              placeholder="e.g. I bought this product 3 months ago. Did not use more than 1/2 time..."
              value={formData.description}
              onChange={handleChange}
              className="textarea textarea-bordered w-full focus:border-primary focus:border-2 outline-0"
              rows="3"
              required
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="btn btn-primary text-base-100 w-full font-semibold"
          >
            Create A Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
