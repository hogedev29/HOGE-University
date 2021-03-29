import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Layout from "../components/layout";
import { Container } from "react-bulma-components";
import Video from "../components/elements/video";

const VideosList = ({ className }) => (
  <StaticQuery
    query={graphql`
      query GetAllVideos {
        allVideosJson {
          nodes {
            title
            url
            description
          }
        }
      }
    `}
    render={(data) => (
      <ul className={`${className}`}>
        {data.allVideosJson.nodes.map((video) => {
          return (
            <li>
              <div className="box video-container">
                <div className="video-title has-text-centered">
                  {video.title}
                </div>
                <Video width="500" height="300" src={video.url} />
              </div>
            </li>
          );
        })}
        <div className="clear"></div>
      </ul>
    )}
  />
);

const VideosPage = () => (
  <Layout>
    <Container className="videos-page">
      <h1 className="page-title">HOGE Videos</h1>
      <h1 className="page-subtitle">Check the latest HOGE videos</h1>
      <VideosList className="mt-6 videos-page-list" />
    </Container>
  </Layout>
);

export default VideosPage;
