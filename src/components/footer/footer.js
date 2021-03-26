import React from "react";
import { Heading, Container } from "react-bulma-components";
import { StaticQuery, graphql } from "gatsby";

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
  <StaticQuery
    query={graphql`
      query footerSections {
        allFooterJson {
          nodes {
            title
            items {
              title
              url
            }
          }
        }
      }
    `}
    render={(data) => (
      <footer className="footer footer-wide">
        <div className="footer-hero mb-6">
          <h1 className="title center">Explore more of HOGE!</h1>
          <h2 className="subtitle center">Can't get enough? We understand.</h2>
        </div>

        <div className="footer-wrapper">
          <Container>
            <div className="columns">
              {data.allFooterJson.nodes.map((el) => {
                return (
                  <div className="column footer-column">
                    <FooterColumn title={el.title} items={el.items} />
                  </div>
                );
              })}
            </div>
          </Container>
        </div>
        <div className="footer-bottom has-text-centered mt-5">
          <span>Developed by a member of HOGE community</span>
        </div>
      </footer>
    )}
  />
);

const FooterColumn = ({ title, items }) => (
  <div>
    <h5 className="footer-column-title">{title}</h5>
    <ul className="footer-column-list">
      {items &&
        items.map((el) => {
          return (
            <li>
              <a
                className="btn-hover-underline-white"
                rel="noreferrer"
                target="_blank"
                href={el.url}
              >
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
