import React from "react";
import Links from "./links";
import { StaticQuery, graphql } from "gatsby";

const Initiatives = ({ className }) => (
  <StaticQuery
    query={graphql`
      query websites {
        allCommunityWebsitesJson {
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
      <div className={`${className}`}>
        <Links links={links.allCommunityWebsitesJson.edges} />
      </div>
    )}
  />
);

export default Initiatives;
