import React from "react";
import banner from "../../assets/images/404.png";
import { PageNotFoundStyled } from "./PageNotFound.style";
import { Button } from "./../Header/Header.style";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <PageNotFoundStyled>
      <img src={banner} alt="404" />
      <Button className="btn btn-outline-success">
        <Link to="/" style={{ textDecoration: "none" }}>
          Back Home
        </Link>
      </Button>
    </PageNotFoundStyled>
  );
};

export default PageNotFound;
