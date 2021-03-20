import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Midsection from "../components/midsection";
import { MDXRenderer } from "gatsby-plugin-mdx";

export default function Template({ data }) {
  const { body, frontmatter } = data.mdx;
  return (
    <Layout>
      <Midsection>
        <div className="container">
          <div className="hero">
            <div className="hero-body">
              <p className="title is-1">{frontmatter.title}</p>
              <p className="subtitle is-4">{frontmatter.subtitle}</p>
            </div>
          </div>
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </Midsection>
    </Layout>
  );
}

export const query = graphql`
  query PageBySlug($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        slug
        title
        subtitle
        date
      }
    }
  }
`;
