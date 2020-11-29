import React from 'react';

import ResumeHeader from '../components/ResumeHeader';
import ResumeKeySkills from '../components/ResumeKeySkills';
import ResumeAbout from '../components/ResumeAbout';
import ResumeEducation from '../components/ResumeEducation';
import ResumeProjects from '../components/ResumeProjects';
import ResumeExperience from '../components/ResumeExperience';

const Resume = () => {
  return (
    <main>
      <ResumeHeader />
      <ResumeAbout />
      <ResumeKeySkills />
      <ResumeEducation />
      <ResumeProjects />
      <ResumeExperience />
      <h2>references available upon request</h2>
    </main>
  );
};

export default Resume;
