import React from "react";

import "./style.scss";
import Helmet from "./helmet";
import Header from "./header";
import Midsection from "./midsection";
import Footer from "./footer";
import Notification from "./notification";
import { SideMenu } from "./midsection";

const Layout = ({ children }) => (
  <div>
    <Helmet />
    <Header />
    <div className="root">
      <SideMenu className={"mobile-side-nav"} />
      <main className="pt-6">
        <Notification />
        <Midsection>{children}</Midsection>
      </main>
    </div>
    <Footer />
  </div>
);

export default Layout;
