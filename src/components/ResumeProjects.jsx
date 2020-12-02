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
          <article key={index}>
            <h3 className="italic">
              {project} <span>{company}</span>
            </h3>
            <ul>
              {info.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </article>
        );
      })}
    </section>
  );
};

export default ResumeProjects;
