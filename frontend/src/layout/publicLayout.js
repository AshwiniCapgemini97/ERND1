import React, { useState } from "react";
import Header from "./header/header";
import Footer from "./footer/footer";

export default function PublicLayout({ children }) {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleError = (error, errorInfo) => {
    console.log("Logging :", error, errorInfo);
  };

  return (
    <>
      <Header />
      <main
        style={{
          paddingTop: "64px",
          minHeight: "calc(100vh - 58px)",
        }}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
