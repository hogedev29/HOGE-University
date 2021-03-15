import React from "react";

import "./style.scss";

import hogeLogo from "../images/hoge-logo.png";

export const UnderlineLink = ({ url, title }) => (
  <div className="underline-link">
    <a rel="noreferrer" target="_blank" href={url}>
      {title}
    </a>
    <div className="line" />
  </div>
);

const Header = ({ siteTitle }) => (
  <section className="hero heroBg is-small">
    <div className="hero-body">
      <div className="top-header center mb-6">
        <UnderlineLink url="https://hoge.finance" title="HOGE WEBSITE" />
        <UnderlineLink url="https://hogefinance.shop" title="HOGE SHOP" />
        <UnderlineLink url="https://hoge.fun" title="HOGE FUN" />
        <UnderlineLink url="https://hogemint.com" title="HOGE MINT" />
        <UnderlineLink url="https://hoge.fun/donate" title="HOGE DONATE" />
      </div>

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
