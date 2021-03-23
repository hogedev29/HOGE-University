import React, { useEffect, useState } from "react";
import { Columns, Box, Container, Heading } from "react-bulma-components";
import { Link } from "gatsby";
import postData from "../../utils";

import "./article.scss";

const Article = ({ data }) => {
  const page = data.pageContext.page;
  console.log("page :>> ", page);

  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(async () => {
    if (!post && !isLoading) {
      console.log("fecth post :>> ");
      await fetchPost(data.pageContext.id);
    }
  });

  const fetchPost = async (id) => {
    isLoading = true;
    try {
      const result = await postData(createQuery(id));
      setPost(result.post);
      console.log("post fetched", result);
    } catch (e) {
      hasError = true;
      console.log(e);
    }
    isLoading = false;
  };

  const createQuery = (id) => {
    return {
      variables: { id },
      query: `query PostById($id: ID!) {
        post(id: $id) {
          id
          author {
            id
            name
            title
          }
          content {
            html
          }
          createdAt
          excerpt
          seo {
            description
            image {
              url
            }
            keywords
            title
          }
          slug
          title
        }
      }
    `,
    };
  };

  return (
    <div className="article-container">
      <Container className="article-header has-text-centered">
        <div>
          <Heading className="article-title">{post.title}</Heading>
        </div>
        <div>
          <Heading subtitle id="article-date" size={6}>
            {post.createdAt}
          </Heading>
        </div>
      </Container>
      <Columns>
        <Columns.Column className="side-column has-text-centered" size={3}>
          <Box>
            <div>{post.author.name}</div>
            <div>{post.author.title}</div>
          </Box>
        </Columns.Column>
        <Columns.Column size={1}></Columns.Column>
        <Columns.Column className="content">
          <div dangerouslySetInnerHTML={{ __html: post.content.html }}></div>
        </Columns.Column>
      </Columns>
    </div>
  );
};

export default Article;
