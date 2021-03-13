import React from "react";

import "./style.scss";
import { Link } from "gatsby";

const Midsection = ({ children }) => (
  <div>
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-one-fifth">
            <aside className="menu">
              <p className="menu-label">General</p>
              <ul className="menu-list">
                <li>
                  <Link to="/what-is-hoge">What is HOGE</Link>
                </li>
                <li>
                  <Link to="/how-to-buy">How can i buy HOGE</Link>
                </li>
              </ul>
              <p className="menu-label">Crypto school</p>
              <ul className="menu-list">
                <li>
                  <Link to="/what-is-hoge">Learning Videos</Link>
                </li>
              </ul>
              <p className="menu-label">Links</p>
              <ul className="menu-list">
                <li>
                  <Link to="/official-websites">Offical Websites</Link>
                </li>
                <li>
                  <Link to="/about">Youtube channels</Link>
                </li>
                <li>
                  <Link to="/about">Explorers</Link>
                </li>
                <li>
                  <Link to="/about">Community</Link>
                </li>
                <li>
                  <Link to="/about">Chat</Link>
                </li>
                <li>
                  <Link to="/about">Games</Link>
                </li>
                <li>
                  <Link to="/about">Wallets</Link>
                </li>
                <li>
                  <Link to="/about">Tutorials</Link>
                </li>
                <li>
                  <Link to="/about">News and Media</Link>
                </li>
                <li>
                  <Link to="/about">Other</Link>
                </li>
              </ul>
            </aside>
          </div>

          <div className="column">{children}</div>
        </div>
      </div>
    </section>
  </div>
);

export default Midsection;
