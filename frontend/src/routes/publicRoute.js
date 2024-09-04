import React from "react";
import PublicLayout from "../layout/publicLayout";

const PublicRoute = ({ children }) => {
  return <PublicLayout>{children}</PublicLayout>;
};

export default PublicRoute;
