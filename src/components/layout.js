import React, { Component } from "react";

import "./style.scss";
import { Link } from "gatsby";
import Helmet from "./helmet";
import Header from "./header/header";
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
      <div className={this.props.className ?? ""}>
        <Helmet />
        <Header onShowMenuClick={this.toggleMenu} />
        <div className="root">
          <SideMenu show={this.state.showMenu} className={"mobile-side-nav"} />
          <main>
            {false && <Notification />}
            {this.props.children}
          </main>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Layout;
