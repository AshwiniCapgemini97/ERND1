import React, { useState } from "react";
import { Menu, Sidebar, Segment } from "semantic-ui-react";
import Header from "./header/header";
import Footer from "./footer/footer";
import AdminLeftNavBar from "./leftNavBar/adminLeftNavBar";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../shared/components/errorDialog/errorFallback";
import "./adminLayout.scss";

export default function AdminLayout({ children }) {
  const [leftNavVisible, setLeftNavVisible] = useState(true);

  const toggleNavbar = () => {
    setLeftNavVisible(!leftNavVisible);
  };

  const handleError = (error, errorInfo) => {
    console.log("Logging :", error, errorInfo);
  };

  return (
    <div className="adminLayoutWrapper">
      <Header />
      <div
        style={{
          paddingTop: "64px",
          minHeight: "calc(100vh - 58px)",
          backgroundColor: "#f5f5f5",
          display: "grid",
          gridTemplateColumns: "13% 87%",
        }}
      >
        <div className="left-bar">
          <Sidebar.Pushable>
            <Sidebar
              as={Menu}
              animation="push"
              width="thin"
              visible={leftNavVisible}
            >
              <AdminLeftNavBar />
            </Sidebar>
          </Sidebar.Pushable>
        </div>
        <div className="main-container">
          <Segment>
            <ErrorBoundary
              FallbackComponent={ErrorFallback}
              onError={handleError}
            >
              {children}
            </ErrorBoundary>
          </Segment>
        </div>
      </div>
      <Footer />
    </div>
  );
}
