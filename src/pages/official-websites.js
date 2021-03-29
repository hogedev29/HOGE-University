import React from "react";
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
    render={(links) => <Links links={links.allOfficialWebsitesJson.edges} />}
  />
);

export default Websites;
