import React from "react";
import Navbar from "react-bulma-components/lib/components/navbar";
import hogeLogo from "../../images/hoge-logo.png";
import header from "../../content/header";
import { Button, Heading, Level } from "react-bulma-components";
import { Link } from "gatsby";

const MobileNavBar = ({ onShowMenuClick }) => (
  <Navbar className="mobile-nav-bar" color="dark">
    <Navbar.Brand>
      <Navbar.Item>
        <Button
          color="white"
          size="small"
          outlined={true}
          onClick={onShowMenuClick}
        >
          Menu
        </Button>
      </Navbar.Item>
      <Navbar.Item className="site-title" href="#" renderAs="a">
        HOGE UNIVERSITY
      </Navbar.Item>
      <Navbar.Burger />
    </Navbar.Brand>
    <Navbar.Menu>
      <Navbar.Container>
        <Navbar.Item href="#">Buy on BKEX</Navbar.Item>
        <Navbar.Item href="#">Buy on Uniswap</Navbar.Item>
        <Navbar.Item href="#">Buy on Bilaxy</Navbar.Item>
        <Navbar.Item href="#">Buy on WhiteBit</Navbar.Item>
      </Navbar.Container>
    </Navbar.Menu>
  </Navbar>
);

/*
const WideNavBar = () => (
  <div className="wide-nav-bar">
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
        </div>

        <div className="header container">
          <div className="banner center mb-6">
            <figure className="icon logo media-left">
              <img src={hogeLogo} alt="hoge-logo" />
            </figure>
            <h1 className="title">HOGE.University</h1>
          </div>

          <div className="center buying-options mb-6">
            <a
              className="mr-3"
              target="_blank"
              rel="noreferrer"
              href="https://whitebit.com/trade/HOGE_USDT"
            >
              <button class="button">Buy in WhiteBit</button>
            </a>
            <a className="mr-3" target="_blank" rel="noreferrer" href="">
              <button class="button">Buy in BKEX</button>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://app.uniswap.org/#/swap?slippage=500&outputCurrency=0xfad45e47083e4607302aa43c65fb3106f1cd7607"
            >
              <button class="button">Buy in UniSwap</button>
            </a>
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
  </div>
);*/

const WideNavBar = () => (
  <header className="wide-nav-bar">
    <Level className="top-header" renderAs="nav">
      <Level.Side align="right">
        <Level.Item>
          <img className="logo" src={hogeLogo} />
        </Level.Item>
      </Level.Side>
      <Level.Item>
        <Heading>HOGE UNIVERSITY</Heading>
      </Level.Item>
      <Level.Side align="left">
        <Level.Item>
          <a className="buy-now btn-hover-underline">BUY HOGE</a>
        </Level.Item>
      </Level.Side>
    </Level>
    <nav className="main-menu">
      <ul>
        <li className="main-menu-item">
          <Link activeClassName="top-menu-btn-active" to={"/posts"}>
            Home
          </Link>
        </li>
        <li className="main-menu-item">
          <Link activeClassName="top-menu-btn-active" to={"/what-is-hoge"}>
            F.A.Q
          </Link>
        </li>
        <li className="main-menu-item">
          <Link activeClassName="top-menu-btn-active" to={"/school"}>
            Crypto School
          </Link>
        </li>
        <li className="main-menu-item">
          <Link activeClassName="top-menu-btn-active" to={"/about"}>
            About
          </Link>
        </li>
      </ul>
    </nav>
    <div className="stats">
      <ul>
        <li className="stats-menu-item">
          <div className="columns has-text-centered">
            <div className="column">
              <div>Holders</div>
              <div>35.000</div>
            </div>
          </div>
        </li>
        <li className="stats-menu-item">
          <div className="columns has-text-centered">
            <div className="column">
              <div>Price</div>
              <div>0.200</div>
            </div>
          </div>
        </li>
        <li className="stats-menu-item">
          <div className="columns has-text-centered">
            <div className="column">
              <div>Market Cap</div>
              <div>353.000.333</div>
            </div>
          </div>
        </li>
        <li className="stats-menu-item">
          <div className="columns has-text-centered">
            <div className="column">
              <div>24h trading volume</div>
              <div>359.555.000</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div className="breadcrumb"></div>
  </header>
);

const Header = ({ onShowMenuClick }) => (
  <div>
    <MobileNavBar onShowMenuClick={onShowMenuClick} />
    <WideNavBar />
  </div>
);

export default Header;
