import React from "react";
import Layout from "../components/layout";
import hogeLogo from "../images/hoge-logo.png";

const OfficalWebsites = () => (
  <Layout>
    <section className="hero">
      <div className="hero-body">
        <p className="title is-1">Offical websites</p>
        <p className="subtitle is-4">List of official websites</p>
      </div>
    </section>

    <section>
      <ul className="links-list ml-5">
        <li>
          <article className="media center">
            <figure className="media-left">
              <span className="icon is-large">
                <img src={hogeLogo} />
              </span>
            </figure>
            <div className="media-content">
              <div className="content">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.hoge.finance"
                >
                  Hoge.Finance
                </a>
                <p className="subtitle is-size-5">Official HOGE website</p>
              </div>
            </div>
          </article>
        </li>
      </ul>
    </section>
  </Layout>
);

export default OfficalWebsites;
