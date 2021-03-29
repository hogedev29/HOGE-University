import React, { useState } from "react";
import { Router } from "@reach/router";
import { useStaticQuery, Link, graphql } from "gatsby";
import Layout from "../components/layout";
import ArticlesList from "../components/articles/articles-list";
import Article from "../components/articles/article";
import { Columns, Section, Button } from "react-bulma-components";
import postData from "../utils";
import Video from "../components/elements/video";
import Initiatives from "../components/elements/initiatives";

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

        allVideosJson(limit: 3) {
          nodes {
            title
            url
            description
          }
        }
      }
    `
  );

  const PostsListPage = () => {
    return (
      <div className="articles-container">
        <h1 className="tile-title">Latest</h1>
        <h1 className="tile-subtitle">Latest articles from HOGE community</h1>
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
    );
  };

  const VideosTile = ({ videos }) => (
    <div>
      <div>
        <h1 className="tile-title">Videos</h1>
        <Link
          className="see-more-btn btn-hover-underline-accent"
          to={`/videos`}
          aria-label={`See more`}
        >
          See more &rarr;
        </Link>
      </div>
      <h1 className="tile-subtitle">Latest articles from HOGE community</h1>
      <div>
        <ul className="videos-list">
          {videos.map((video) => {
            return (
              <li>
                <Video className="video" src={video.url} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );

  const HomePage = () => {
    return (
      <div className="home container">
        <Section>
          <Columns>
            <Columns.Column>
              <Columns.Column className="videos-tile">
                <VideosTile videos={data.allVideosJson.nodes} />
              </Columns.Column>
              <Columns>
                <Columns.Column size={5}>
                  <PostsListPage />
                </Columns.Column>
                <Columns.Column>
                  <div className="initiaves-container">
                    <div>
                      <h1 className="tile-title">Commnunity initiaves</h1>
                      <Link
                        className="see-more-btn btn-hover-underline-accent"
                        to={`/initiatives`}
                        aria-label={`See more`}
                      >
                        See more &rarr;
                      </Link>
                    </div>

                    <h1 className="tile-subtitle">
                      Join one of HOGE community initiatives
                    </h1>
                    <Initiatives className="initiatives" />
                  </div>
                </Columns.Column>
              </Columns>
            </Columns.Column>
          </Columns>
        </Section>
      </div>
    );
  };

  return (
    <Layout>
      <Router basepath="/home">
        <HomePage path="/" />
        <Article path="/:slug" />
      </Router>
    </Layout>
  );
};

export default ArticlesPage;
