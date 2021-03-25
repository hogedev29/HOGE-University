import React from "react";
import Layout from "../components/layout";
import { Heading, Menu, Columns, Section } from "react-bulma-components";
import { Link } from "gatsby";

const SideMenu = ({ course }) => {
  return (
    <Menu className="course-menu">
      {course.modules.map((module) => {
        return (
          <Menu.List title={module.title}>
            {module.lessons.map((lesson) => {
              return (
                <Menu.List.Item>
                  <Link href={`/school/${course.slug}/${lesson.slug}`}>
                    {lesson.title}
                  </Link>
                </Menu.List.Item>
              );
            })}
          </Menu.List>
        );
      })}
    </Menu>
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
    <Layout className="course-page">
      <div className="title center">
        <Heading>{course.title}</Heading>
      </div>

      <Columns>
        <Columns.Column size={4} className="menu-container">
          <SideMenu course={course} />
        </Columns.Column>
        <Columns.Column>{lesson && <Lesson lesson={lesson} />}</Columns.Column>
      </Columns>
    </Layout>
  );
}
