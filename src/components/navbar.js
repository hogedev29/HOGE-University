import React from "react";

import "./style.scss";
import hogeLogo from "../images/hoge-logo.png";

const Navbar = () => (
  <div className="hero-head is-hidden-mobile">
    <nav
      className="navbar is-transparent is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="#">
          <img src={hogeLogo} />

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          />
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    </nav>
  </div>
);

export default Navbar;
