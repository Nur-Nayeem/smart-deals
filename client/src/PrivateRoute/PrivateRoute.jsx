import React, { use } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../Context/Context";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  if (loading) {
    return <h3>Loading...</h3>;
  } else if (user) {
    return children;
  }
  return <Navigate to={"/auth/login"} />;
};

export default PrivateRoute;
