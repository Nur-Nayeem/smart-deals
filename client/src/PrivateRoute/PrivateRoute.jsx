import React, { use } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  if (!user) {
    return <Navigate to={"/auth/login"} />;
  } else if (loading) {
    return <h3>Loading...</h3>;
  }
  return children;
};

export default PrivateRoute;
