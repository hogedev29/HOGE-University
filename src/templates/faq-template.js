import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { SideMenu } from "../components/sidebar/sidebar";

export default function Template({ data }) {
  const { body, frontmatter } = data.mdx;
  return (
    <Layout>
      <div className="columns faq">
        <div className="column side-nav-column">
          <SideMenu className="full-side-nav" />
        </div>
        <div className="column content-container">
          <div className="hero">
            <div className="hero-body">
              <p className="title is-1">{frontmatter.title}</p>
              <p className="subtitle is-4">{frontmatter.subtitle}</p>
              <hr></hr>
            </div>
          </div>
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </div>
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
