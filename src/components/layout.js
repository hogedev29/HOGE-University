import React from "react";

import "./style.scss";
import Helmet from "./helmet";
import Header from "./header";
import Midsection from "./midsection";
import Footer from "./footer";
import { Message } from "react-bulma-components";

const Notification = () => (
  <div className="container toast mt-4">
    <section>
      <Message color="danger has-text-centered">
        <Message.Body>
          Help developers. <strong>HOGE developers</strong>, need your help!
        </Message.Body>
      </Message>
    </section>
  </div>
);
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
