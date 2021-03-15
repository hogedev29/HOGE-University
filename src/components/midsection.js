import React from "react";

import "./style.scss";
import { Link } from "gatsby";
import menu from "../content/side-menu";

const Midsection = ({ children }) => (
  <div>
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-one-quarter">
            <div className="menu-box">
              <aside className="menu side-menu">
                {menu.sections.map((section) => {
                  return (
                    <div className="menu-section">
                      <p className="menu-label">{section.title}</p>

                      {section.children && (
                        <ul className="menu-list">
                          {section.children.map((item) => {
                            return (
                              <li>
                                <Link activeClassName="active" to={item.slug}>
                                  {item.title}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </aside>
            </div>
          </div>

          <div className="column">{children}</div>
        </div>
      </div>
    </section>
  </div>
);

export default Midsection;
