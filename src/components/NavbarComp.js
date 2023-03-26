import React, { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown, Container, Row, Col } from "react-bootstrap";

function NavbarComp() {
  const [changeColor, setChangeColor] = useState(false);
  const changeBgColor = () => {
    if (window.scrollY > 695) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBgColor();

    window.addEventListener("scroll", changeBgColor);
  });

  return (
    <div className="sticky-top">
      <Navbar variant="dark" expand="lg" className={"changeColor" ? "color-active" : ""}>
        <Container className="">
          <Navbar.Brand href="#home" className="fw-bold  fs-4">
            JUDUL
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center">
              <Nav.Link href="#home" className="mx-2">
                Home
              </Nav.Link>
              <Nav.Link href="#link" className="mx-2">
                Gallery
              </Nav.Link>
              <Nav.Link href="#link" className="mx-2">
                FAQ
              </Nav.Link>
              <NavDropdown title="Services" id="basic-nav-dropdown" className="mx-2">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComp;
