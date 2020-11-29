import React from 'react';
import { useGlobalContext } from '../context';

const ResumeKeySkills = () => {
  const { keySkills } = useGlobalContext();

  return (
    <section>
      <h2>key skills</h2>
      <ul>
        {keySkills.map((skill, index) => {
          return <li key={index}>{skill}</li>;
        })}
      </ul>
    </section>
  );
};

export default ResumeKeySkills;
