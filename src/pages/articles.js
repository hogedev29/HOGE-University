import React from "react";

import Layout from "../components/layout";
import ArticlesList from "../components/articles/articles-list";
import { Heading } from "react-bulma-components";
import { StaticQuery, graphql } from "gatsby";

const ArticlePage = () => (
  <StaticQuery
    query={graphql`
      query allGraphCmsPost {
        allGraphCmsPost(sort: { fields: date, order: ASC }) {
          nodes {
            id
            createdAt
            author {
              id
              name
              title
            }
            excerpt
            slug
            title
          }
        }
      }
    `}
    render={(data) => (
      <Layout>
        <div className="container">
          <div className="columns section">
            <div className="articles-container column">
              <Heading id="title">Latest</Heading>
              <Heading id="subtitle" size={6} subtitle>
                Latest articles from HOGE community
              </Heading>
              <ArticlesList posts={data.allGraphCmsPost.nodes} />
            </div>
          </div>
        </div>
      </Layout>
    )}
  />
);

export default ArticlePage;
