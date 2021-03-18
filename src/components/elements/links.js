import React from "react";

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
                  <img src={data.image} />
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
