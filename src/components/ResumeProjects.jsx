import React from 'react';
import { useGlobalContext } from '../context';

const ResumeProjects = () => {
  const { projects } = useGlobalContext();

  return (
    <section>
      <h2>projects</h2>
      {projects.map((item, index) => {
        const { project, company, info } = item;
        return (
          <div key={index}>
            <h3>
              {project} <span>{company}</span>
            </h3>
            <ul>
              {info.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </section>
  );
};

export default ResumeProjects;
