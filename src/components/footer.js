import React from "react";
import "./style.scss";
import { Heading } from "react-bulma-components";
import footer from "../content/footer";

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
  <footer className="footer">
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

export default Footer;

/**
 *     <div class="column has-text-centered">
              <FooterColumn title="Explore" items={["Facebook", "Twitter"]} />
            </div>
            <div class="column has-text-centered">
              <FooterColumn
                title="Token information"
                items={["Facebook", "Twitter", "Instagram"]}
              />
            </div>
            <div class="column has-text-centered">
              <FooterColumn title="Social" items={["Facebook"]} />
            </div>
 */
