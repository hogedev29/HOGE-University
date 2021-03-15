import React from "react";

import "./style.scss";

import hogeLogo from "../images/hoge-logo.png";
import header from "../content/header";

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
      <div className="top-header mb-6">
        <div className="center">
          <UnderlineLink url="https://hoge.finance" title="HOGE WEBSITE" />
          <UnderlineLink url="https://hogefinance.shop" title="HOGE SHOP" />
          <UnderlineLink url="https://hoge.fun" title="HOGE FUN" />
          <UnderlineLink url="https://hogemint.com" title="HOGE MINT" />
          <UnderlineLink url="https://hoge.fun/donate" title="HOGE DONATE" />
        </div>
        <div className="side-menu">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://whitebit.com/trade/HOGE_USDT"
          >
            <button class="button is-rounded">Buy in WhiteBit</button>
          </a>
          <a target="_blank" rel="noreferrer" href="">
            <button class="button is-rounded">Buy in BKEX</button>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://app.uniswap.org/#/swap?slippage=500&outputCurrency=0xfad45e47083e4607302aa43c65fb3106f1cd7607"
          >
            <button class="button is-rounded">Buy in UniSwap</button>
          </a>
        </div>
      </div>

      <div className="header container">
        <div className="center mb-6">
          <figure className="icon logo media-left">
            <img src={hogeLogo} alt="hoge-logo" />
          </figure>
          <h1 className="title">HOGE.University</h1>
        </div>
        <div className="exchanges has-text-centered center columns">
          <div className="column" />
          {header.exchanges.map((el) => {
            return (
              <div className="column">
                <a rel="noreferrer" target="_blank" href={el.url}>
                  <img src={el.image}></img>
                </a>
              </div>
            );
          })}
          <div className="column" />
        </div>
      </div>
    </div>
  </section>
);

export default Header;
