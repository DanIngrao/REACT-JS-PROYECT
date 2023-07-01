import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="light" expand="lg" className='NavBar'>
      <Container>
        <Navbar.Brand as={Link} to="/">Libreria Eden</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/categoria/libros">Libros</Nav.Link>
              <Nav.Link as={Link} to="/categoria/biblias">Biblias</Nav.Link>
              <Nav.Link>
                <CartWidget/>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar