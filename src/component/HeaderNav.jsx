import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import LoginExample from "./login-Modal";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const Example = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand className="ml-3">
          {" "}
          <Link className="navbar-brand mr-auto" to="/">
            <i class="fas fa-star"></i>
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="text-center">
          <Nav className="ml-auto mr-3" navbar>
            <NavItem>
              <NavLink className="font-weight-bold">
                <Router>
                  {" "}
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </Router>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="font-weight-bold">
                <Link className="nav-link" to="/Todo-List">
                  Create Todo
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="font-weight-bold">
                <Link className="nav-link" to="/ContactUs">
                  ContactUs
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="font-weight-bold">
                {" "}
                <Link className="nav-link" to="/AboutUs">
                  AboutUs
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="font-weight-bold">
                {" "}
                <Link className="nav-link">
                  <LoginExample />
                </Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
