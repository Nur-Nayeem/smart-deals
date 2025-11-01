import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/Context";

const MyProducts = () => {
  const [myProducts, setMyproducts] = useState([]);

  const { user } = use(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:4000/products/my-products?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyproducts(data));
  }, [user?.email]);

  const handleBidDelete = (id) => {
    fetch(`http://localhost:4000/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const filterProducts = myProducts.filter(
          (product) => product._id !== id
        );
        setMyproducts(filterProducts);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (myProducts.length < 1) {
    return (
      <div>
        <h3>No Products created</h3>
      </div>
    );
  }

  return (
    <div>
      <h3>My Products: {myProducts.length}</h3>
      <div>
        <div className="overflow-x-auto bg-base-100 rounded-lg w-full">
          <table className="table">
            <thead>
              <tr>
                <th>SL No</th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {myProducts.map((product, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={product.image}
                            onError={(e) => {
                              e.currentTarget.src =
                                "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png";
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{product?.title}</td>
                  <td>{product?.category}</td>
                  <td>{product?.price_max}</td>
                  <td>{product?.status}</td>
                  <td className="flex space-x-2">
                    <button
                      //   onClick={() => handleBidDelete(bid._id)}
                      className="btn bg-base-100 rounded-lg border-primary text-primary"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleBidDelete(product._id)}
                      className="btn bg-base-100 rounded-lg border-red-600 text-rose-600"
                    >
                      Delete
                    </button>
                    <button
                      //   onClick={() => handleBidDelete(bid._id)}
                      className="btn bg-base-100 rounded-lg border-success text-success"
                    >
                      Make Sold
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyProducts;
