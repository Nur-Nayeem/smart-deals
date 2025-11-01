import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Context/Context";

const Navbar = () => {
  const { user, signOutUSer } = use(AuthContext);
  const handleLogOut = () => {
    signOutUSer().then(() => {
      console.log("Logout successfull");
    });
  };
  return (
    <div className="navbar container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/products"}>All Products</Link>
            </li>
            {user && (
              <li>
                <Link to={"/my-products"}>My Products</Link>
              </li>
            )}
            {user && (
              <li>
                <Link to={"/my-bids"}>My Bids</Link>
              </li>
            )}
            <li>
              <Link to={"/create-product"}>Create Product</Link>
            </li>
          </ul>
        </div>
        <Link to={"/"} className="text-3xl text-secondary font-bold">
          Smart<span className="text-primary">Deals</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/products"}>All Products</Link>
          </li>
          {user && (
            <li>
              <Link to={"/my-products"}>My Products</Link>
            </li>
          )}
          {user && (
            <li>
              <Link to={"/my-bids"}>My Bids</Link>
            </li>
          )}
          <li>
            <Link to={"/create-product"}>Create Product</Link>
          </li>
        </ul>
      </div>

      {!user && (
        <div className="navbar-end space-x-3.5">
          <Link
            to={"/auth/login"}
            className="btn bg-base-100 border-[#9F62F2] text-primary"
          >
            Login
          </Link>
          <Link
            to={"/auth/register"}
            className="hidden sm:flex btn btn-primary"
          >
            Register
          </Link>
        </div>
      )}

      {user && (
        <div className="navbar-end">
          <button onClick={handleLogOut} className="btn btn-primary">
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
