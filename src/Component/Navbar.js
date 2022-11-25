import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'

function NavbarComponent() {
  return (
    <Navbar bg='light' expand='sm'>
        Mini Drive
        <Nav className="ml-auto">
            Profile
        </Nav>
    </Navbar>
  );
}

export default NavbarComponent;
