import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Section, Heading } from "react-bulma-components";
import { StaticImage } from "gatsby-plugin-image";

export default function Template({ data }) {
  const { body, frontmatter } = data.mdx;
  return (
    <Layout>
      <div className="container">
        <div className="hero">
          <div className="hero-body">
            <p className="title is-1">{frontmatter.title}</p>
            <p className="subtitle is-4">{frontmatter.subtitle}</p>
          </div>
        </div>
        <MDXRenderer>{body}</MDXRenderer>
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
