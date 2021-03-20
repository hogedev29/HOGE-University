import React from "react";
import { Article } from "../components/articles/article";
import Layout from "../components/layout";
import { Heading, Container, Columns } from "react-bulma-components";

export default function ArticeTemplate(data) {
  return (
    <Layout>
      <Container>
        <Heading className="center">{data.pageContext.page.title}</Heading>
        <Columns>
          <Columns.Column size={3}>
            {data.pageContext.page.author.name}
          </Columns.Column>
          <Columns.Column>{data.pageContext.page.title}</Columns.Column>
        </Columns>
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
