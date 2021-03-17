import React from "react";
import { Heading } from "react-bulma-components";
import footer from "../../content/footer";

const FooterMobile = () => (
  <footer className="footer footer-mobile">
    <div className="container">
      <div className="footer-hero mb-6">
        <Heading className="center">Explore more of HOGE!</Heading>
        <p className="center">Can't get enough? We understand!</p>
      </div>
    </div>
  </footer>
);

const FooterWide = () => (
  <footer className="footer footer-wide">
    <div className="container">
      <div className="footer-hero mb-6">
        <Heading className="center">Explore more of HOGE!</Heading>
        <p className="center">Can't get enough? We understand!</p>
      </div>

      <div className="columns">
        {footer.sections.map((el) => {
          return (
            <div className="column has-text-centered">
              <FooterColumn title={el.title} items={el.children} />
            </div>
          );
        })}
      </div>
    </div>
  </footer>
);

const FooterColumn = ({ title, items }) => (
  <div>
    <Heading className="footer-heading" size={4}>
      {title}
    </Heading>
    <ul className="footer-list">
      {items &&
        items.map((el) => {
          return (
            <li>
              <a rel="noreferrer" target="_blank" href={el.url}>
                {el.title}
              </a>
            </li>
          );
        })}
    </ul>
  </div>
);

const Footer = () => (
  <div>
    <FooterMobile />
    <FooterWide />
  </div>
);

export default Footer;
