import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "./Header.style";

const Header = () => {
  return (
    <div className="container">
      <Nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            NetFlix
          </Link>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success">Search</button>
          </form>
        </div>
      </Nav>
    </div>
  );
};

export default Header;
