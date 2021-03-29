import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Links = ({ classname, links }) => (
  <ul className={`${classname} links-list `}>
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
                  <a
                    className="link"
                    target="_blank"
                    rel="noreferrer"
                    href={node.url}
                  >
                    {node.title}
                  </a>
                  <p>{node.subtitle}</p>
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
