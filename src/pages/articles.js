import React from "react";

import Layout from "../components/layout";
import Articles from "../components/articles";
import { Heading } from "react-bulma-components";

const ArticlePage = () => (
  <Layout>
    <Articles>
      <Heading>Articles !!</Heading>
    </Articles>
  </Layout>
);

export default ArticlePage;
