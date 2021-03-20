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
      <div>
        <Helmet />
        <Header onShowMenuClick={this.toggleMenu} />
        <div className="root">
          <SideMenu show={this.state.showMenu} className={"mobile-side-nav"} />
          <main className="pt-6">
            <nav className="site-nav center">
              <Link className="mr-4" to={"/articles"}>
                Articles
              </Link>
              <Link className="mr-4" to={"/what-is-hoge"}>
                Faq
              </Link>
              <Link className="mr-4" to={"/school"}>
                School
              </Link>
            </nav>
            <Notification />
            {this.props.children}
          </main>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Layout;
