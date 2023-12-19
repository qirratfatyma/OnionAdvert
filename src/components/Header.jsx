import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


function BasicExample() {
  return (
    <Navbar expand="lg" className="navbar-color">
      <Container>
        <Navbar.Brand>
          <Link to={"/"} className="navbar-title">
            <img src={logo} alt="logo" />
            <b>OnionAdverts</b>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navbar-section">
            <Link to="/HeroSection" className="navbar-elements">
              <h3>Client</h3>
            </Link>
            <DropdownButton  className="btn navbar-btn" title="Services" >
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
            <Link to="/Blog" className="navbar-elements">
              <h3>Blog</h3>
            </Link>
            <Link to="/About" className="navbar-elements">
              <h3>About Us</h3>
            </Link>
            <Link to="/Contact" className="navbar-elements">
              <h3>Contact Us</h3>
            </Link>
            <Link to="/Careers" className="navbar-elements">
              <h3>Careers</h3>
            </Link>
          </Nav>
          <Link to="/Login">
            <button className="btn navbar-btn">Lets Talk</button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
