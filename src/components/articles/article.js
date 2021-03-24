import React, { useEffect, useState } from "react";
import { useParams } from "@reach/router";
import { Columns, Box, Container, Heading } from "react-bulma-components";
import { Link } from "gatsby";
import postData from "../../utils";

import "./article.scss";

const Article = ({ data }) => {
  const params = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(async () => {
    if (!loaded) {
      const slug = data?.pageContext ? data.pageContext.post.slug : params.slug;
      await fetchPost(slug);
    }
  });

  const fetchPost = async (slug) => {
    setLoaded(true);
    setHasError(false);
    setIsLoading(true);
    try {
      const result = await postData(
        process.env.GRAPH_CMS_ENDPOINT,
        createQuery(slug)
      );
      setPost(result.data.post);
      console.log("post fetched", result);
    } catch (e) {
      setHasError(true);
      console.log(e);
    }
    setIsLoading(false);
  };

  const createQuery = (slug) => {
    return {
      variables: { slug },
      query: `query PostBySlug($slug:String!) {
        post(where: {slug: $slug}) {
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
    <div>
      {isLoading && <div>Loading</div>}
      {post && renderPost()}
    </div>
  );

  function renderPost() {
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
        <Container>
          <Columns>
            <Columns.Column className="side-column has-text-centered" size={3}>
              <Box>
                <div>{post.author.name}</div>
                <div>{post.author.title}</div>
              </Box>
            </Columns.Column>
            <Columns.Column size={1}></Columns.Column>
            <Columns.Column className="content">
              <div
                dangerouslySetInnerHTML={{ __html: post.content.html }}
              ></div>
            </Columns.Column>
          </Columns>
        </Container>
      </div>
    );
  }
};

export default Article;
