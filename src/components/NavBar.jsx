import React from 'react';
import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Libreria Eden</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/categoria/libros">Libros</Nav.Link>
              <Nav.Link href="/categoria/biblias">Biblias</Nav.Link>
              <CartWidget/>
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar