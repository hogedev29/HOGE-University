import React from "react";

import "./style.scss";

const Articles = ({ children }) => (
  <div className="container">
    <div className="columns section">
      <div className="column">
        <div>{children}</div>
      </div>
    </div>
  </div>
);

export default Articles;
