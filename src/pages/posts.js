import React, { useState } from "react";
import { Router } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import ArticlesList from "../components/articles/articles-list";
import Article from "../components/articles/article";
import { Heading, Button } from "react-bulma-components";
import postData from "../utils";

const ArticlesPage = () => {
  const [skip, setSkip] = useState(2);
  const [posts, setPosts] = useState([]);
  const [hasMoreData, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPosts = async (skip) => {
    console.log(
      "process.env.GRAPH_CMS_ENDPOINT :>> ",
      process.env.GRAPH_CMS_ENDPOINT
    );

    setIsLoading(true);
    try {
      const { data } = await postData(
        process.env.GRAPH_CMS_ENDPOINT,
        createQuery(skip)
      );
      setPosts(data.postsConnection.edges.map((edge) => edge.node));
      setSkip(skip * 2);
      setHasMore(data.postsConnection.pageInfo.hasNextPage);
    } catch (err) {
      //TODO handle err
      console.error(err);
    }

    setIsLoading(false);
  };

  const createQuery = (skip) => {
    return {
      variables: { skip },
      query: `query PaginatedPosts($skip: Int) {
        postsConnection(skip: $skip, orderBy: createdAt_ASC, first: 2) {
          pageInfo {
            pageSize
            hasNextPage
          }
          edges {
            node {
              createdAt
              excerpt
              author {
                id
                name
                title
              }
              slug
              title
            }
          }
        }
      }
    `,
    };
  };

  const loadMorePosts = (index) => {
    fetchPosts(index);
  };

  const data = useStaticQuery(
    graphql`
      query allGraphCmsPost {
        allGraphCmsPost(limit: 2, sort: { fields: date, order: ASC }) {
          nodes {
            id
            createdAt
            author {
              id
              name
              title
            }
            excerpt
            slug
            title
          }
        }
      }
    `
  );

  const PostsListPage = () => {
    return (
      <div className="container">
        <div className="columns section mt-0">
          <div className="articles-container column">
            <h1 className="page-title">Latest</h1>
            <h1 className="page-subtitle">
              Latest articles from HOGE community
            </h1>
            <ArticlesList posts={data.allGraphCmsPost.nodes.concat(posts)} />
            <div className="center">
              <Button
                loading={isLoading}
                isStatic={isLoading}
                invisible={!hasMoreData}
                onClick={() => loadMorePosts(skip)}
              >
                Load more
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Layout>
      <Router basepath="/posts">
        <PostsListPage path="/" />
        <Article path="/:slug" />
      </Router>
    </Layout>
  );
};

export default ArticlesPage;
