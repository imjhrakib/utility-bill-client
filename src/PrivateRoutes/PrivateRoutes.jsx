import React, { use, useContext } from "react";

import { AuthContext } from "../provider/AuthContext";
import { Navigate, useLocation } from "react-router";
import NotFoundPage from "../NotFound/NotFound";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner text-success text-4xl"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
