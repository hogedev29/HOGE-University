import React from "react";
import { Columns, Box, Heading } from "react-bulma-components";
import { Link } from "gatsby";

import "./article.scss";

const Article = ({ data }) => {
  const page = data.pageContext.page;
  console.log("page :>> ", page);
  return (
    <div className="article-container">
      <Heading id="article-title" className="center">
        {page.title}
      </Heading>
      <Columns>
        <Columns.Column className="side-column has-text-centered" size={3}>
          {page.author.name}
        </Columns.Column>
        <Columns.Column className="content">
          <div dangerouslySetInnerHTML={{ __html: page.content.html }}></div>
        </Columns.Column>
      </Columns>
    </div>
  );
};

export default Article;
