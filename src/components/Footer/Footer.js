import React from "react";
import { FooterStyled } from "./Footer.style";

const Footer = () => {
  return (
    <FooterStyled>
      <div className="container">
        <div className="row justify-content-center">
          All copy rights received {new Date().getFullYear()}&copy;
        </div>
      </div>
    </FooterStyled>
  );
};

export default Footer;
