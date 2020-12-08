import React, { useEffect } from 'react';

import Header from '../components/shared/Header';
import Links from '../components/shared/Links';
import ResumeKeySkills from '../components/ResumeKeySkills';
import ResumeAbout from '../components/ResumeAbout';
import ResumeEducation from '../components/ResumeEducation';
import ResumeProjects from '../components/ResumeProjects';
import ResumeExperience from '../components/ResumeExperience';
import ResumeReferences from '../components/ResumeReferences';
import ResumeDownloadButton from '../components/ResumeDownloadButton';

import { useGlobalContext } from '../context';

import './Resume.scss';

const Resume = () => {
  const { header, links, routerLinks } = useGlobalContext();
  const headerText = header[1];
  const routerLinkText = routerLinks[1];

  useEffect(() => {
    document.title = 'Nelson Foltz | Resume';
  }, []);

  return (
    <>
      <header>
        <Header headerText={headerText} />
        <Links data={links} routerLinkText={routerLinkText} />
        <ResumeDownloadButton />
      </header>
      <main className="resume-main">
        <ResumeAbout />
        <ResumeKeySkills />
        <ResumeEducation />
        <ResumeProjects />
        <ResumeExperience />
        <ResumeReferences />
      </main>
    </>
  );
};

export default Resume;
