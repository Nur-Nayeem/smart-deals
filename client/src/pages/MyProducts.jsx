import React, { use, useEffect, useState } from "react";
import { AuthContext, ProductsContext } from "../Context/Context";
import Swal from "sweetalert2";
import { SiTicktick } from "react-icons/si";
import Loading from "../components/Loading";

const MyProducts = () => {
  const [myProducts, setMyproducts] = useState([]);

  const { user } = use(AuthContext);
  const { products, setProducts } = use(ProductsContext);
  const [myProductLoading, setMyProductLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:4000/products/my-products?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyproducts(data);
        setMyProductLoading(false);
      })
      .catch((err) => {
        setMyProductLoading(false);
        console.log(err.message);
      });
  }, [user?.email]);

  const handleBidDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/products/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            const filterProducts = myProducts.filter(
              (product) => product._id !== id
            );
            setMyproducts(filterProducts);
            const filterAllProducts = products.filter((p) => p._id !== id);
            setProducts(filterAllProducts);
          })
          .catch((err) => {
            console.log(err);
          });
        Swal.fire({
          title: "Deleted!",
          text: "Your Product has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const handleMakeSold = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to sell this with this price?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Sell it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/products/${id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ status: "sold" }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            const updated = myProducts.map((product) =>
              product._id === id ? { ...product, status: "sold" } : product
            );
            setMyproducts(updated);
          })
          .catch((err) => {
            console.log(err);
          });
        Swal.fire({
          title: "Sold!",
          text: "Your Product has been Sold.",
          icon: "success",
        });
      }
    });
  };

  if (myProductLoading) {
    return <Loading />;
  }

  if (myProducts.length < 1) {
    return (
      <h2 className="text-center text-3xl font-bold text-secondary my-4">
        No Products Found
      </h2>
    );
  }

  return (
    <div>
      <h2 className="text-center text-3xl font-bold text-secondary my-4">
        My Products: <span className="text-primary">{myProducts.length}</span>
      </h2>
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
                  <td>
                    <div
                      className={`text-base-100 badge ${
                        product?.status === "pending"
                          ? "badge-warning"
                          : "badge-success"
                      } `}
                    >
                      {product?.status}
                    </div>
                  </td>
                  <td className="flex space-x-2">
                    <button
                      onClick={() => alert("feature is comming...")}
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
                      disabled={product.status === "sold"}
                      onClick={() => handleMakeSold(product._id)}
                      className="btn bg-base-100 rounded-lg border-success text-success"
                    >
                      {product.status === "sold" ? <SiTicktick /> : "Make Sold"}
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
