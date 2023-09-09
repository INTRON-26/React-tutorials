import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';

function Header() {
    return(
        <div>
      <Navbar bg="light" variant="light">
        <Navbar.Brand as={Link} to="/home">Crop Data Analytics</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
          <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
        </Nav>
      </Navbar>
      {/* Your main content */}
    </div>
    );
}

export default Header;