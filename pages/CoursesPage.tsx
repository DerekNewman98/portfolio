import React from "react";
import AnimatedSection from "../components/AnimatedSection";
import { courses } from "../data/portfolioData";
import { Course } from "../types";

const CourseCard: React.FC<{ course: Course }> = ({ course }) => (
  <article className="glass-card glass-card--hover">
    <p className="section-kicker">{course.id}</p>
    <h3 className="item-title">{course.title}</h3>
    <p className="course-meta">{course.format}</p>
    <p className="item-description">{course.description}</p>
    <ul className="item-detail-list">
      {course.focus.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </article>
);

const CoursesPage: React.FC = () => (
  <AnimatedSection className="section-shell">
    <div className="section-card">
      <div className="section-intro">
        <p className="eyebrow">Courses</p>
        <h1 className="section-title">Teaching and educational design around brain dynamics, computation, and scientific reasoning.</h1>
        <p className="section-description">
          The page keeps your course-grid architecture, but shifts the visual
          treatment toward premium academic cards rather than generic thumbnail
          tiles.
        </p>
      </div>

      <div className="card-grid card-grid--3">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default CoursesPage;
