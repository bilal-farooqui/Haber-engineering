import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Input,
  Button,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./SideBar";
import { sidebarData } from "../Constants/data";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status from localStorage (or sessionStorage)
  useEffect(() => {
    const userLoggedIn = localStorage.getItem("loggedIn");
    setIsLoggedIn(userLoggedIn === "true"); // Ensure the correct boolean value
  }, []); // Empty dependency array ensures this runs once on mount

  // Handle login click event
  const handleLoginClick = () => {
    navigate("/login");
  };

  // Handle logout click event
  const handleLogoutClick = () => {
    // Remove logged-in status from localStorage
    localStorage.setItem("loggedIn", "false");
    setIsLoggedIn(false); // Update state
    navigate("/login"); // Navigate to the login page
  };

  return (
    <div className="px-4">
      <Navbar>
        <NavbarBrand href="/">Haber-Engineering</NavbarBrand>
        <Nav className="me-auto">
          <NavItem>
            <NavLink className="text-secondary" href="/service">
              Services
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="text-secondary" href="/product">
              Products
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="text-secondary" disabled href="/about">
              About
            </NavLink>
          </NavItem>
        </Nav>
        <div className="pe-2">
          <Input placeholder="search" />
        </div>

        {/* Conditionally render the Login or Logout button */}
        {isLoggedIn ? (
          <Button onClick={handleLogoutClick}>Logout</Button>
        ) : (
          <Button onClick={handleLoginClick}>Login</Button>
        )}

        {/* <SideBar direction={"end"} data={sidebarData} /> */}
      </Navbar>
    </div>
  );
}

export default NavBar;
