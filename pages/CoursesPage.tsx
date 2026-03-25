import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { courses } from '../data/portfolioData';
import { Course } from '../types';

const CourseCard: React.FC<{ course: Course }> = ({ course }) => (
    <div className="bg-background-secondary rounded-lg border border-transparent hover:border-accent/50 overflow-hidden transform hover:-translate-y-2 transition-all duration-300 shadow-lg">
        <img src={course.imageUrl} alt={course.title} className="w-full h-48 object-cover" />
        <div className="p-6">
            <h3 className="text-xl font-bold text-text-primary mb-2">{course.title}</h3>
            <p className="font-mono text-accent mb-3">{course.id}</p>
            <p className="text-text-secondary">{course.description}</p>
        </div>
    </div>
);

const CoursesPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-background">
      <AnimatedSection className="py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-2">Courses</h1>
          <p className="text-lg text-text-secondary mb-12">A selection of courses I have taught or created.</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default CoursesPage;