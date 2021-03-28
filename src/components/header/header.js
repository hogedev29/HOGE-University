import React from "react";
import Navbar from "react-bulma-components/lib/components/navbar";
import hogeLogo from "../../images/hoge-logo.png";
import header from "../../content/header";
import { Button, Heading, Level } from "react-bulma-components";
import { Link } from "gatsby";

const setActive = ({ location: { pathname } }, target) => {
  if (pathname.includes(target)) {
    return {
      className: "top-menu-btn-active",
    };
  }
};

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
          <Link getProps={(props) => setActive(props, "/posts")} to={"/posts"}>
            Home
          </Link>
        </li>
        <li className="main-menu-item">
          <Link
            getProps={(props) => setActive(props, "/what-is-hoge")}
            to={"/what-is-hoge"}
          >
            F.A.Q
          </Link>
        </li>
        <li className="main-menu-item">
          <Link
            getProps={(props) => setActive(props, "/school")}
            to={"/school"}
          >
            Crypto School
          </Link>
        </li>
        <li className="main-menu-item">
          <Link getProps={(props) => setActive(props, "/about")} to={"/about"}>
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
