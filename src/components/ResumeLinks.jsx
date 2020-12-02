import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

const ResumeLinks = () => {
  const { resumeLinks } = useGlobalContext();
  return (
    <nav className="resume-links">
      <ul>
        <Link to="/">
          <li>portfolio</li>
        </Link>
        {resumeLinks.map((item, index) => {
          return (
            <a key={index} href={item.url} target="_blank" rel="noreferrer">
              <li>{item.text}</li>
            </a>
          );
        })}
      </ul>
    </nav>
  );
};

export default ResumeLinks;
