import React from 'react';
import { useGlobalContext } from '../context';

const ResumeAbout = () => {
  const { resumeAbout } = useGlobalContext();

  return (
    <section>
      <h2>about</h2>
      {resumeAbout.map((paragraph, index) => {
        return <p key={index}>{paragraph}</p>;
      })}
    </section>
  );
};

export default ResumeAbout;
