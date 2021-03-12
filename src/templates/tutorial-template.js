import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { MDXRenderer } from 'gatsby-plugin-mdx';

export default function Template({ data }) {
  console.log("data :>> ", data);
  const {  body } = data.mdx;
  return (
    <Layout>
      <div className="container">
          <MDXRenderer>{body}</MDXRenderer>
      </div>
    </Layout>
  );
}

export const query = graphql`
   query PageBySlug($slug: String!) {
      mdx(frontmatter: {slug: {eq: $slug}}) {
    	body
      frontmatter {
        slug
        title
        date
      }
    }
  }
`;
