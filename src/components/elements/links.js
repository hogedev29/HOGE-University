import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "../style.scss";

const Links = ({ links }) => (
  <ul className="links-list ml-5">
    {links.map((data) => {
      return (
        <li>
          <div className="box">
            <article className="media center">
              <figure className="media-left">
                <span className="icon is-large">
                  <StaticImage
                    width="200"
                    height="200"
                    src="../../images/hoge-fun.png"
                    alt="A kitten"
                  />
                </span>
              </figure>
              <div className="media-content">
                <div className="content">
                  <a target="_blank" rel="noreferrer" href={data.url}>
                    {data.title}
                  </a>
                  <p className="subtitle is-size-5">{data.subtitle}</p>
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
