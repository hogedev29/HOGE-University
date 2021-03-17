import React from "react";

import "./sidebar.scss";
import { Link } from "gatsby";
import { Menu } from "react-bulma-components";
import menu from "../../content/side-menu";

export const SideMenu = ({ className, show }) => (
  <nav
    className={`${show ? "side-nav-show" : ""} ${className} side-nav`}
    role="navigation"
    aria-label="main navigation"
  >
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
);
