import React from "react";

import { Navbar, Button, Form, FormControl } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";

export const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">PhoneXSmith</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Form className="ml-auto" inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">
            <Search />
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};
