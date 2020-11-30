import React from 'react';

import ResumeHeader from '../components/ResumeHeader';
import ResumeKeySkills from '../components/ResumeKeySkills';
import ResumeAbout from '../components/ResumeAbout';
import ResumeEducation from '../components/ResumeEducation';
import ResumeProjects from '../components/ResumeProjects';
import ResumeExperience from '../components/ResumeExperience';
import ResumeReferences from '../components/ResumeReferences';
import Footer from '../components/Footer';

const Resume = () => {
  return (
    <>
      <ResumeHeader />
      <main>
        <ResumeAbout />
        <ResumeKeySkills />
        <ResumeEducation />
        <ResumeProjects />
        <ResumeExperience />
        <ResumeReferences />
      </main>
      <Footer />
    </>
  );
};

export default Resume;
