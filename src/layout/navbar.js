import * as ReactBootStrap from "react-bootstrap";
import React from 'react';

function Navbar() {

return(
<ReactBootStrap.Navbar bg="light" expand="lg">
        <ReactBootStrap.Navbar href="/">ShoesTour</ReactBootStrap.Navbar>
        <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.Nav.Link href="/catalogo">Catalogo</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="/nosotros">Nosotros</ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
          <ReactBootStrap.Form inline>
            <ReactBootStrap.FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
            <ReactBootStrap.Button variant="outline-primary">Buscar</ReactBootStrap.Button>
          </ReactBootStrap.Form>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
);
}

export default Navbar;
