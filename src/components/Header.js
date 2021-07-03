import React, { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getRecipes } from "../redux/recipe/recipeActions";

const Header = () => {
  const [input, setInput] = useState("");
  const disptach = useDispatch();

  return (
    <Container>
      <Navbar bg="white" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://www.allrecipes.com/img/misc/og-default.png"
              alt="logo"
              height="80"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Form className="d-flex">
              <FormControl
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="search"
                placeholder="Find a recipe..."
                className="mr-2"
                aria-label="Search"
              />
              <Button
                variant="outline-success"
                onClick={() => disptach(getRecipes(input))}
              >
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
