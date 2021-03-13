import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Section, Heading } from "react-bulma-components";
import { StaticImage } from "gatsby-plugin-image";

export default function Template({ data }) {
  console.log("data :>> ", data);
  const { body, frontmatter } = data.mdx;
  return (
    <Layout>
      <div className="container">
        <Section>
          <Heading>
            <strong>{frontmatter.title}</strong>
          </Heading>
          <Heading subtitle>{frontmatter.subtitle}</Heading>
        </Section>
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
