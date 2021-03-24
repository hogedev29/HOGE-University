import React from "react";
import Article from "../components/articles/article";
import Layout from "../components/layout";
import { Container } from "react-bulma-components";

export default function ArticeTemplate(data) {
  return (
    <Layout>
      <Container>
        <Article data={data} />
      </Container>
    </Layout>
  );
}

/** 
export const pageQuery = graphql`
  fragment AssetFields on GraphCMS_Asset {
    id
    localFile {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  query BlogPostQuery($id: String!) {
    authorImage: graphCmsAsset(
      authorAvatar: {
        elemMatch: { posts: { elemMatch: { id: { in: [$id] } } } }
      }
    ) {
      ...AssetFields
    }
    coverImage: graphCmsAsset(
      coverImagePost: { elemMatch: { id: { eq: $id } } }
    ) {
      ...AssetFields
    }
  }
`;
*/
