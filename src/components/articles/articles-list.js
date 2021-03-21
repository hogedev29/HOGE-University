import React from "react";
import ArticlePreview from "./article-preview";

import "./articles-list.scss";

const ArticleList = ({ className, posts }) => (
  <ul className={`${className} articles`}>
    {posts.map((edge) => {
      return <ArticlePreview article={edge} />;
    })}
  </ul>
);

export default ArticleList;
