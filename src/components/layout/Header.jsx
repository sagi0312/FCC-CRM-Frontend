import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../assets/images/Logo-crm.png";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="sm">
      <Navbar.Brand>
        <img src={logo} alt="logo" width="50px" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link>Dashboard</Nav.Link>
          <Nav.Link>Members</Nav.Link>
          <Nav.Link>Activity</Nav.Link>
          <Nav.Link>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
