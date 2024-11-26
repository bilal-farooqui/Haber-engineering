import React, { useState } from "react";
import SideBar from "../components/SideBar";
import { adminSidebarData } from "../Constants/data";
import { Button, Col, Container, Row, Label } from "reactstrap";
import SidePanel from "../components/SidePanel";
import MUITable from "../components/MUITable";

import DashboardContent from "./DashboardContent";
import HomeContent from "./HomeContent";
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
        {selectedTab == "Products" || selectedTab == "Services" ? (
          <MUITable />
        ) : selectedTab == "Home" ? (
          <HomeContent />
        ) : selectedTab == "About" ? (
          <p>About Page Selected</p>
        ) : selectedTab == "Dashboard" ? (
          <DashboardContent />
        ) : (
          <p>No Page Selected</p>
        )}
      </div>
    </div>
  );
};

export default Admin;
