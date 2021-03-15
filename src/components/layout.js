import React from "react";

import "./style.scss";
import Helmet from "./helmet";
import Header from "./header";
import Midsection from "./midsection";
import Footer from "./footer";
import Notification from "./notification";

const Layout = ({ children }) => (
  <div>
    <Helmet />
    <Header />
    <Notification />
    <Midsection>{children}</Midsection>
    <Footer />
  </div>
);

export default Layout;
