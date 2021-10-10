import React from "react";
import { Link } from "react-router-dom";
import { Nav, Links, Wrapper, Button } from "./Header.style";

const Header = () => {
  return (
    <Wrapper as="section">
      <div className="container">
        <Nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              <Links>NetFlix</Links>
            </Link>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <Button className="btn btn-outline-success">Search</Button>
            </form>
          </div>
        </Nav>
      </div>
    </Wrapper>
  );
};

export default Header;
