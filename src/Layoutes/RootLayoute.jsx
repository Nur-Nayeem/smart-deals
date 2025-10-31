import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const RootLayoute = () => {
  return (
    <div>
      <header>
        <nav className="bg-base-100 shadow-sm">
          <Navbar />
        </nav>
      </header>
      <main className="container">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayoute;
