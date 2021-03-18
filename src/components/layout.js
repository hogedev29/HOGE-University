import React, { Component } from "react";

import "./style.scss";
import Helmet from "./helmet";
import Header from "./header/header";
import Midsection from "./midsection";
import Footer from "./footer/footer";
import Notification from "./elements/notification";
import { SideMenu } from "./sidebar/sidebar";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    };
  }

  toggleMenu = () => {
    this.setState((prevState) => ({
      showMenu: !prevState.showMenu,
    }));
  };

  render() {
    return (
      <div>
        <Helmet />
        <Header onShowMenuClick={this.toggleMenu} />
        <div className="root">
          <SideMenu show={this.state.showMenu} className={"mobile-side-nav"} />
          <main className="pt-6">
            <Notification />
            <Midsection>{this.props.children}</Midsection>
          </main>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Layout;
