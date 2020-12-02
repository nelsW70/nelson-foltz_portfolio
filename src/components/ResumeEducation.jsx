import React from 'react';
import { useGlobalContext } from '../context';

const ResumeEducation = () => {
  const { education } = useGlobalContext();

  return (
    <section>
      <h2>education</h2>
      {education.map((school, index) => {
        const { institution, description } = school;
        return (
          <article key={index}>
            <h3 className="italic">{institution}</h3>
            <p>{description}</p>
          </article>
        );
      })}
    </section>
  );
};

export default ResumeEducation;
