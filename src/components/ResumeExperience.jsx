import React from 'react';
import { useGlobalContext } from '../context';

const ResumeExperience = () => {
  const { experience } = useGlobalContext();
  return (
    <section>
      <h2>experience</h2>
      {experience.map((job, index) => {
        return <h3 key={index}>{job}</h3>;
      })}
    </section>
  );
};

export default ResumeExperience;
