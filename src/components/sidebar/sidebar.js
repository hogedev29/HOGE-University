import React from "react";

import "./sidebar.scss";
import { Link, StaticQuery, graphql } from "gatsby";
import { Menu } from "react-bulma-components";

const setActive = ({ location: { pathname } }, target) => {
  if (pathname.includes(target)) {
    return {
      className: "active",
    };
  }
};

export const SideMenu = ({ className, show }) => (
  <StaticQuery
    query={graphql`
      query menu {
        allFile(
          filter: { sourceInstanceName: { eq: "markdown-pages-faq" } }
          sort: { fields: absolutePath }
        ) {
          group(field: dir) {
            nodes {
              absolutePath
              name
            }
          }
        }
      }
    `}
    render={(data) => (
      <nav
        className={`${show ? "side-nav-show" : ""} ${className}`}
        role="navigation"
        aria-label="main navigation"
      >
        <Menu>
          {data.allFile.group.map((group) => {
            const paths = group.nodes[0].absolutePath.split("/");
            const parent = paths[paths.length - 2];

            return (
              <Menu.List title={parent.replace(/-/g, " ")}>
                {group.nodes.map((node) => {
                  const slices = node.name.split("-").slice(1);
                  const slug = slices.join("-");
                  const name = slices.join(" ");
                  return (
                    <Menu.List.Item>
                      <Link
                        getProps={(props) => setActive(props, slug)}
                        to={"/faq/" + slug}
                      >
                        {capitalize(name)}
                      </Link>
                    </Menu.List.Item>
                  );
                })}
              </Menu.List>
            );
          })}
        </Menu>
      </nav>
    )}
  />
);

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
