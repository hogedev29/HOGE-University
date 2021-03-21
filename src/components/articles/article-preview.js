import React from "react";
import { Columns, Box, Heading } from "react-bulma-components";
import { Link } from "gatsby";

const ArticlePreview = ({ article }) => (
  <li>
    <Box className="mb-4 article-row">
      <article>
        <div>
          <Columns>
            <Columns.Column className="center" size={3}>
              <div className="center">
                <time>{article.createdAt}</time>
              </div>
            </Columns.Column>
            <Columns.Column>
              <Heading>{article.author.title}</Heading>
              <Heading subtitle size={6}>
                {article.author.name}
              </Heading>
              <p className="excerpt">{article.excerpt}</p>
              <div>
                <Link
                  className="read-more"
                  to={`/posts/${article.slug}`}
                  aria-label={`Read "${article.title}"`}
                >
                  Read more &rarr;
                </Link>
              </div>
            </Columns.Column>
          </Columns>
        </div>
      </article>
    </Box>
  </li>
);

export default ArticlePreview;
