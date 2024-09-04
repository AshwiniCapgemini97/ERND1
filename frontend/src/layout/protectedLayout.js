import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../shared/components/errorDialog/errorFallback";

export default function MainLayout({ children }) {
  const handleError = (error, errorInfo) => {
    console.log("Logging :", error, errorInfo);
  };

  return (
    <>
      <Header />
      <main
        style={{
          paddingTop: "64px",
          paddingBottom: "57px",
          minHeight: "calc(100vh - 58px)",
          backgroundColor: "#f5f5f5",
        }}
      >
        <ErrorBoundary FallbackComponent={ErrorFallback} onError={handleError}>
          {children}
        </ErrorBoundary>
      </main>
      <Footer />
    </>
  );
}
