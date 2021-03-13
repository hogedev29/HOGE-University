import React from "react";
import { FaTwitter, FaGithub, FaMedium } from "react-icons/fa";
import { StaticQuery, graphql } from "gatsby";
import "./style.scss";
import { Heading } from "react-bulma-components";

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
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.hoge.finance"
              >
                {el}
              </a>
            </li>
          );
        })}
    </ul>
  </div>
);
const Footer = () => (
  <StaticQuery
    query={graphql`
      query SocialQuery {
        site {
          siteMetadata {
            medium
            github
          }
        }
      }
    `}
    render={(data) => (
      <section className="footer">
        <div className="container">
          <div className="footer-hero mb-6">
            <Heading className="center">Explore more of Hoge!</Heading>
            <p className="center">Can't get enough? We understand!</p>
          </div>
          <div class="columns">
            <div class="column has-text-centered">
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
          </div>
        </div>
      </section>
    )}
  />
);

export default Footer;
