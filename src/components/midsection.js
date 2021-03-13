import React from "react";

import "./style.scss";
import { Link } from "gatsby";
import menu from "../content/side-menu";

const Midsection = ({ children }) => (
  <div>
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-one-fifth">
            <aside className="menu">
              {menu.sections.map((section) => {
                return (
                  <div className="menu-section">
                    <p className="menu-label">{section.title}</p>
                    <ul className="menu-list">
                      {section.children.map((item) => {
                        return (
                          <li>
                            <Link to={item.slug}>{item.title}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </aside>
          </div>

          <div className="column">{children}</div>
        </div>
      </div>
    </section>
  </div>
);

export default Midsection;
