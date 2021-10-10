import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Nav, Links, Wrapper, Button } from "./Header.style";
import {
  fetchingMovies,
  fetchingTVshows,
  clearAll,
} from "./../../redux/actions";

const Header = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const handleQuerySearch = () => {
    if (query) {
      dispatch(clearAll());
      dispatch(fetchingMovies(query));
      dispatch(fetchingTVshows(query));
    }
    setQuery("");
  };
  return (
    <Wrapper as="section">
      <div className="container">
        <Nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              <Links>NetFlix</Links>
            </Link>
            <div className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Button
                className="btn btn-outline-success"
                onClick={() => handleQuerySearch()}
              >
                Search
              </Button>
            </div>
          </div>
        </Nav>
      </div>
    </Wrapper>
  );
};

export default Header;
