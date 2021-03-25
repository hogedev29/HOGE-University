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
      <div className={`${className}`}>
        <ul>
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
      </div>
    )}
  />
);
const SchoolPage = () => (
  <Layout>
    <Container className="school">
      <Heading className="title">HOGE Crypto School</Heading>
      <Heading className="subtitle" subtitle={true} size={6}>
        Educate the community about cryptocurrency
      </Heading>
      <Courses className="mt-6 courses-list" />
    </Container>
  </Layout>
);

export default SchoolPage;
