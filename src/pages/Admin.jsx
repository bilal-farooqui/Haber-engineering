import React, { useState } from "react";
import SidePanel from "../components/SidePanel";

import DashboardContent from "./DashboardContent";
import HomeContent from "./HomeContent";
import ProductContent from "./ProductContent";
import ServiceContent from "./ServiceContent";
const Admin = () => {
  const [selectedTab, setSelectedTab] = useState("Dashboard");
  return (
    <div className="d-flex">
      <SidePanel selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <div
        style={{
          flexGrow: 1, // Take up the remaining width
          backgroundColor: "white", // Light background for content area
          padding: "20px",
          overflowY: "auto",
          minHeight: "100vh", // Allows scrolling if content overflows
        }}
      >
        {selectedTab == "Products" ? (
          <ProductContent />
        ) : selectedTab == "Home" ? (
          <HomeContent />
        ) : selectedTab == "About" ? (
          <p>About Page Selected</p>
        ) : selectedTab == "Dashboard" ? (
          <DashboardContent />
        ) : selectedTab == "Services" ? (
          <ServiceContent />
        ) : (
          <p>No Page Selected</p>
        )}
      </div>
    </div>
  );
};

export default Admin;
