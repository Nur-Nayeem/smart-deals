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
      <main className="container mx-auto h-[90vh] flex justify-center items-center">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayoute;
