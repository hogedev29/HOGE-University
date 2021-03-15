import React from "react";

import "./style.scss";

import hogeLogo from "../images/hoge-logo.png";
import coinMarketcap from "../images/coinMarketcap.png";
import coinbase from "../images/coinbase.png";
import whitebit from "../images/whitebit.png";
import blockfolio from "../images/blockfolio.svg";

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

      <div className="header container">
        <div className="center mb-6">
          <figure className="icon logo media-left">
            <img src={hogeLogo} alt="hoge-logo" />
          </figure>
          <h1 className="title">HOGE.University</h1>
        </div>
        <div className="exchanges has-text-centered center columns">
          <div className="column" />
          <div className="column">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://coinmarketcap.com/currencies/hoge-finance/"
            >
              <img src={coinMarketcap}></img>
            </a>
          </div>
          <div className="column">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.coinbase.com/price/hoge-finance"
            >
              <img src={coinbase}></img>
            </a>
          </div>
          <div className="column">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://whitebit.com/trade/HOGE_USDT"
            >
              <img src={whitebit}></img>
            </a>
          </div>
          <div className="column">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://blockfolio.com/coin/HOGE"
            >
              <img src={blockfolio}></img>
            </a>
          </div>
          <div className="column" />
        </div>
      </div>
    </div>
  </section>
);

export default Header;
