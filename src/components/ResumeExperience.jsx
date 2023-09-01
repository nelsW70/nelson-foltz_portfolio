import React from 'react';
import { useGlobalContext } from '../context';

const ResumeExperience = () => {
  const { experience } = useGlobalContext();
  return (
    <section className="experience">
      <h2>experience</h2>
      {experience.map((job, index) => {
        return (
          <article key={index}>
            <h3 key={index}>{job}</h3>
          </article>
        );
      })}
    </section>
  );
};

export default ResumeExperience;
