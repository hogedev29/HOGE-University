import React from "react";
import Layout from "../components/layout";
import { Menu, Section } from "react-bulma-components";
import { Link } from "gatsby";

const setActive = ({ location: { pathname } }, target) => {
  const paths = pathname.split("/");
  const lastPath = paths[paths.length - 1];
  if (lastPath === target) {
    return {
      className: "active",
    };
  }
};

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
                      getProps={(props) => setActive(props, lesson.slug)}
                      to={`/school/${course.slug}/${lesson.slug}`}
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
      <div className="course-title center">{course.title}</div>
      <div className="columns course-page mt-0">
        <div className="column side-nav-column">
          <SideMenu className="side-nav full-side-nav" course={course} />
        </div>
        <div className="column content-container">
          <div className="hero">
            <div className="hero-body">
              <h1 className="page-title">{lesson && lesson.title}</h1>
              <hr></hr>
            </div>
          </div>
          {lesson && <Lesson lesson={lesson} />}
        </div>
      </div>
    </Layout>
  );
}
