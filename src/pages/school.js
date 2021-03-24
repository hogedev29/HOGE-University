import React from "react";
import { graphql, StaticQuery } from "gatsby";
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
            }
          }
        }
      }
    `}
    render={(data) => (
      <div className={`${className}`}>
        {data.allGraphCmsCourse.edges.map(({ node }) => {
          return (
            <Box className="course">
              <div>{node.title}</div>
            </Box>
          );
        })}
      </div>
    )}
  />
);
const SchoolPage = () => (
  <Layout>
    <Container>
      <Heading>HOGE Crypto School</Heading>
      <Heading subtitle={true} size={6}>
        Educate the community about cryptocurrency
      </Heading>
      <Courses className="mt-6 courses" />
    </Container>
  </Layout>
);

export default SchoolPage;
