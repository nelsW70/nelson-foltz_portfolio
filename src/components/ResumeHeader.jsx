import React from 'react';
import './ResumeHeader.scss';
import ResumeLinks from './ResumeLinks';

const ResumeHeader = () => {
  return (
    <header className="resume-header">
      <h1>Nelson Foltz</h1>
      <ResumeLinks />
    </header>
  );
};

export default ResumeHeader;
