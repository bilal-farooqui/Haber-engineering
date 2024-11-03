import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Input} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./SideBar";

function NavBar(args) {
  return (
    <div className="px-4">
      <Navbar>
        <NavbarBrand href="/">Haber-Engineering</NavbarBrand>
        <Nav className="me-auto">
          <NavItem>
            <NavLink disabled href="/services/">
              Services
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="/products/">
              Products
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="/about/">
              About
            </NavLink>
          </NavItem>
        </Nav>
        <div className="pe-2">
          <Input placeholder="search" />
        </div>
        <SideBar/>
      </Navbar>
    </div>
  );
}

export default NavBar;
