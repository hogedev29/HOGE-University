import React from "react";
import { Box, Heading } from "react-bulma-components";
import { Link } from "gatsby";
import "./article-preview.scss";

const ArticlePreview = ({ article }) => (
  <li>
    <Box className="mb-4 article-row">
      <article>
        <Heading className="article-title">{article.author.title}</Heading>
        <div className="subheading">
          <span className="article-author">{article.author.name}</span>
          <time className="article-time">{article.createdAt}</time>
        </div>
        <p className="article-excerpt">{article.excerpt}</p>
        <div className="read-more-container">
          <Link
            className="read-more btn-hover-underline-accent"
            to={`/posts/${article.slug}`}
            aria-label={`Read "${article.title}"`}
          >
            Read more &rarr;
          </Link>
        </div>
      </article>
    </Box>
  </li>
);

export default ArticlePreview;
