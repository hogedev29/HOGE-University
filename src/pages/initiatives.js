import React from "react";
import Layout from "../components/layout";
import { Container } from "react-bulma-components";
import { StaticQuery, graphql } from "gatsby";
import Links from "../components/elements/links";

const InitiativesList = ({ className }) => (
  <StaticQuery
    query={graphql`
      query AllInitiatives {
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

const InitiativesPage = () => (
  <Layout>
    <Container className="initiatives-page">
      <h1 className="page-title">HOGE Community Initiatives</h1>
      <h1 className="page-subtitle">Join one of the community initiatives</h1>
      <InitiativesList className="initiatives-container" />
    </Container>
  </Layout>
);

export default InitiativesPage;
