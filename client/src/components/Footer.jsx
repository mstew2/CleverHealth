import React from "react";
import Logo from "../img/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="leftSide">
        <img src={Logo} alt="" />
      </div>
      <span>
        made by team 16.
      </span>
    </footer>
  );
};

export default Footer;