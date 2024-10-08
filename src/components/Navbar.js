import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function NavigationBar() {
  return (
    <header>
      <Navbar bg="light" expand="sm" collapseOnSelect>
        <Navbar.Brand className="ms-3" as={Link} to="/">
          Michigan
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="m-2" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/lansing">
              Lansing
            </Nav.Link>
            <Nav.Link as={Link} to="/grand-rapids">
              Grand Rapids
            </Nav.Link>
            <Nav.Link as={Link} to="/detroit">
              Detroit
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default NavigationBar;
