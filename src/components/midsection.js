import React from "react";

import "./style.scss";
import { SideMenu } from "./sidebar/sidebar";

const Midsection = ({ children }) => (
  <div className="container">
    <div className="columns section">
      <div className="column side-nav-column">
        <SideMenu className="full-side-nav" />
      </div>
      <div className="column">
        <div>{children}</div>
      </div>
    </div>
  </div>
);

export default Midsection;
