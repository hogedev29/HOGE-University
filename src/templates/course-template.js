import React from "react";
import Layout from "../components/layout";
import { Heading, Menu, Columns, Section } from "react-bulma-components";
import { Link } from "gatsby";

const SideMenu = ({ className, course }) => {
  return (
    <nav className={className}>
      <Menu>
        {course.modules.map((module) => {
          return (
            <Menu.List title={module.title}>
              {module.lessons.map((lesson) => {
                return (
                  <Menu.List.Item>
                    <Link
                      activeClassName="active"
                      href={`/school/${course.slug}/${lesson.slug}`}
                    >
                      {lesson.title}
                    </Link>
                  </Menu.List.Item>
                );
              })}
            </Menu.List>
          );
        })}
      </Menu>
    </nav>
  );
};

const Lesson = ({ lesson }) => {
  return (
    <div>
      <Section>
        <Heading>{lesson.title}</Heading>
      </Section>
      <Section>
        <div dangerouslySetInnerHTML={{ __html: lesson.content.html }}></div>
      </Section>
    </div>
  );
};

export default function CourseTemplate(data) {
  console.log("data :>> ", data);
  const course = data.pageContext.course;
  const lesson = data.pageContext.lesson;
  console.log("course :>> ", course);
  return (
    <Layout>
      <div className="columns course-page mt-0">
        <div className="column side-nav-column">
          <SideMenu className="side-nav full-side-nav" course={course} />
        </div>
        <div className="column content-container">
          <div className="hero">
            <div className="hero-body">
              <h1 className="page-title">{course.title}</h1>
              <hr></hr>
            </div>
          </div>
          {lesson && <Lesson lesson={lesson} />}
        </div>
      </div>
    </Layout>
  );
}
