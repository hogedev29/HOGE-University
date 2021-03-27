import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";
import Layout from "../components/layout";
import { Heading, Container, Section, Box } from "react-bulma-components";

const Courses = ({ className }) => (
  <StaticQuery
    query={graphql`
      query GetCourses {
        allGraphCmsCourse {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `}
    render={(data) => (
      <ul className={`${className}`}>
        {data.allGraphCmsCourse.edges.map(({ node }) => {
          return (
            <li>
              <Box className="course-item">
                <div>{node.title}</div>
                <Link href={`/school/${node.slug}`}>Start course</Link>
              </Box>
            </li>
          );
        })}
      </ul>
    )}
  />
);
const SchoolPage = () => (
  <Layout>
    <Container className="school">
      <h1 className="page-title">HOGE Crypto School</h1>
      <h1 className="page-subtitle">
        Educate the community about cryptocurrency
      </h1>
      <Courses className="mt-6 courses-list" />
    </Container>
  </Layout>
);

export default SchoolPage;
