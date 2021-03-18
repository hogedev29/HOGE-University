import React from "react";
import Layout from "../components/layout";
import content from "../content";
import Links from "../components/elements/links";

const Websites = () => (
  <Layout>
    <section className="hero">
      <div className="hero-body">
        <p className="title is-1">Community websites</p>
        <p className="subtitle is-4">List of community websites</p>
      </div>
    </section>

    <section>
      <Links links={content.websites.community} />
    </section>
  </Layout>
);

export default Websites;
