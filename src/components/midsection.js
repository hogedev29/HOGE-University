import React, { Component } from "react";

import "./style.scss";
import { Link } from "gatsby";
import { Menu, Button } from "react-bulma-components";
import menu from "../content/side-menu";

export const SideMenu = ({ className, show }) => (
  <nav
    className={`${show ? "side-nav-show" : ""} ${className} side-nav-container`}
    role="navigation"
    aria-label="main navigation"
  >
    <nav className="side-nav">
      <Menu>
        {menu.sections.map((section) => {
          return (
            <Menu.List title={section.title}>
              {section.children.map((item) => {
                return (
                  <Menu.List.Item>
                    <Link activeClassName="active" to={item.slug}>
                      {item.title}
                    </Link>
                  </Menu.List.Item>
                );
              })}
            </Menu.List>
          );
        })}
      </Menu>
    </nav>
  </nav>
);

const Midsection = ({ children }) => (
  <div className="container">
    <div className="columns section">
      <div className="column side-nav-column">
        <SideMenu className="full-side-nav" />
      </div>
      <div className="column">
        <div>{children}</div>
      </div>
    </div>
  </div>
);

export default Midsection;
