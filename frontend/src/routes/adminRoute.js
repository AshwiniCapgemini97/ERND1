import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import AdminLayout from "../layout/adminLayout";

const AdminRoute = ({ children }) => {
  const authReducer = useSelector((state) => state.authReducer);

  if (!authReducer.isAuthenticated && !authReducer.role !== "Admin") {
    // Redirect to login on unauthorized access
    return <Navigate to="/" replace />;
  }

  return <AdminLayout>{children}</AdminLayout>;
};

export default AdminRoute;
