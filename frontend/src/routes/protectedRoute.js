import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import ProtectedLayout from "../layout/protectedLayout";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector(
    (state) => state.authReducer.isAuthenticated
  );

  if (!isAuthenticated) {
    // Redirect to login on unauthorized access
    return <Navigate to="/" replace />;
  }

  return <ProtectedLayout>{children}</ProtectedLayout>;
};

export default ProtectedRoute;
