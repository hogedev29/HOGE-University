import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { SideMenu } from "../components/sidebar/sidebar";

export default function Template({ data }) {
  const { body, frontmatter } = data.mdx;
  return (
    <Layout>
      <div className="columns faq mt-0">
        <div className="column side-nav-column">
          <SideMenu className="side-nav full-side-nav" />
        </div>
        <div className="column content-container">
          <div className="hero">
            <div className="hero-body">
              <p className="page-title">{frontmatter.title}</p>
              <p className="page-subtitle">{frontmatter.subtitle}</p>
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
