import * as React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavBar() {
  return (
    <Navbar bg="light" expand="lg" className="font-gelasio " fixed="top">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" role="navigation">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/shop">Shop</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="/">Summer Baby Studios</Navbar.Brand>
      </Container>
    </Navbar>
  );
}
