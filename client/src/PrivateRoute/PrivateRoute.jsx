import React, { use } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../Context/Context";
import Loading from "../components/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  if (loading) {
    return <Loading />;
  } else if (user) {
    return children;
  }
  return <Navigate to={"/auth/login"} />;
};

export default PrivateRoute;
