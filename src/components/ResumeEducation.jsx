import React from 'react';
import { useGlobalContext } from '../context';

const ResumeEducation = () => {
  const { education } = useGlobalContext();
  console.log(education, 'education');

  return (
    <section>
      <h2>education</h2>
      {education.map((school, index) => {
        const { institution, description } = school;
        return (
          <div key={index}>
            <h3>{institution}</h3>
            <h4>{description}</h4>
          </div>
        );
      })}
    </section>
  );
};

export default ResumeEducation;
