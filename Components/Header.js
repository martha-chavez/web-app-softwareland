import React, { useState, useEffect } from 'react';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setSticky(true);
    } else if (window.scrollY < 90) {
      setSticky(false);
    }
  }

  return (
    <div className={`header${sticky ? ' sticky' : ''} bg-secondary`}>
      <Navbar light expand="md ">
        <Container>
          <NavbarBrand href="/">
          <img src="./img/logo.webp" alt="" className="logo "/>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="m-auto" navbar>
              <NavItem>
                <NavLink className="encabezado" href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="encabezado" href="#feature">Front-End</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="encabezado" href="#service">Back-End</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="encabezado"  href="#about">Información</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;