import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const RootLayoute = () => {
  return (
    <div className="bg-base-200">
      <header>
        <nav className="bg-base-100 shadow-sm">
          <Navbar />
        </nav>
      </header>
      <main className="container mx-auto ">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayoute;
