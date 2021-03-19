import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "../style.scss";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Links = ({ links }) => (
  <ul className="links-list ml-5">
    {links.map(({ node }) => {
      return (
        <li>
          <div className="box">
            <article className="media center">
              <figure className="media-left">
                <span className="icon is-large">
                  <GatsbyImage image={getImage(node.fields.linkImage)} />
                </span>
              </figure>
              <div className="media-content">
                <div className="content">
                  <a target="_blank" rel="noreferrer" href={node.url}>
                    {node.title}
                  </a>
                  <p className="subtitle is-size-5">{node.subtitle}</p>
                </div>
              </div>
            </article>
          </div>
        </li>
      );
    })}
  </ul>
);

export default Links;
