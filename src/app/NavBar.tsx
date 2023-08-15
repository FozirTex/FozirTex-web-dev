"use client";

import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <Navbar
      bg="primary"
      variant="white"
      sticky="top"
      expand="sm"
      collapseOnSelect
    >
      <Container>
        {/* <Navbar.Brand href="/">Home</Navbar.Brand> bad practice cuz it re-renders the whole page every time */}
        <Navbar.Brand as={Link} href="/">
          BANG THAT SHIT
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav>
            <Nav.Link as={Link} href="/about" active={pathname === "/abou-us"}>
              About Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
