import React, { useState } from "react";
import { adminSidebarData } from "../Constants/data";

const SidePanel = ({ selectedTab, setSelectedTab }) => {
  const styles = {
    sidebar: {
      width: "250px",
      height: "100vh",
      backgroundColor: "#2c3e50",
      color: "white",
      // position: "fixed",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
    },
    header: {
      display: "flex",
      alignItems: "center",
      marginBottom: "20px",
    },
    profileImage: {
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      marginRight: "15px",
    },
    name: {
      fontSize: "18px",
      fontWeight: "bold",
    },
    tabs: {
      listStyleType: "none",
      padding: 0,
      margin: 0,
    },
    tab: {
      padding: "10px 15px",
      cursor: "pointer",
      transition: "background-color 0.3s",
      width: "100%",
    },
  };

  // List of tabs
  const tabs = ["Home", "About", "Services", "Portfolio", "Contact"];

  // State for tracking hovered tab index
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div style={styles.sidebar} className="d-none d-md-flex flex-column">
      {/* Header */}
      <div style={styles.header}>
        <img
          src={adminSidebarData.pfp}
          alt="Profile"
          style={styles.profileImage}
        />
        <span style={styles.name}>{adminSidebarData.accountName}</span>
      </div>

      {/* Tabs */}
      <ul style={styles.tabs}>
        {adminSidebarData.options.map((tab, index) => (
          <li
            key={index}
            style={{
              ...styles.tab,
              backgroundColor:
                hoveredIndex === index
                  ? "orange"
                  : tab == selectedTab
                  ? "red"
                  : "transparent",
            }}
            className="list-group-item list-group-item-action  text-white "
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={(e) => {
              console.log("This is the Value of Selection", tab);
              setSelectedTab(tab);
            }}
          >
            {tab}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidePanel;
