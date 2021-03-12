import React from "react";

import "./style.scss";

import hogeLogo from "../images/hoge-logo.png";

const Header = ({ siteTitle }) => (
  <section className="hero heroBg is-small">
    <div className="hero-body">
      <div className="header container center">
        <article className="media center">
          <figure className="icon logo media-left">
            <img src={hogeLogo} alt="hoge-logo" />
          </figure>
          <div className="media-content">
            <h1 className="title">HOGE.University</h1>
          </div>
        </article>
      </div>
    </div>
  </section>
);

export default Header;
