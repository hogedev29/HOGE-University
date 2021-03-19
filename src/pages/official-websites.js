import React from "react";
import Layout from "../components/layout";
import Links from "../components/elements/links";
import { StaticQuery, graphql } from "gatsby";

const Websites = () => (
  <StaticQuery
    query={graphql`
      query officialWebsites {
        allOfficialWebsitesJson {
          edges {
            node {
              id
              title
              subtitle
              url
              fields {
                linkImage {
                  childImageSharp {
                    gatsbyImageData(width: 250, height: 250)
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(links) => (
      <Layout>
        <section className="hero">
          <div className="hero-body">
            <p className="title is-1">Offical websites</p>
            <p className="subtitle is-4">List of official websites</p>
          </div>
        </section>

        <section>
          <Links links={links.allOfficialWebsitesJson.edges} />
        </section>
      </Layout>
    )}
  />
);

export default Websites;
