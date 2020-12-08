import React, { useEffect } from 'react';

import Header from '../components/shared/Header';
import Links from '../components/shared/Links';
import ResumeKeySkills from '../components/ResumeKeySkills';
import ResumeAbout from '../components/ResumeAbout';
import ResumeEducation from '../components/ResumeEducation';
import ResumeProjects from '../components/ResumeProjects';
import ResumeExperience from '../components/ResumeExperience';
import ResumeReferences from '../components/ResumeReferences';

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
        <article className="download-button">
          <figure>
            <div>
              <span className="resume-button">
                <p className="button-face">download</p>
              </span>
              <span className="resume-button">
                <p className="button-back">
                  <a
                    href="/downloads/Nelson_Foltz.pdf"
                    target="_blank"
                    rel="noreferrer"
                    download
                  >
                    pdf
                  </a>
                </p>
              </span>
            </div>
          </figure>
        </article>
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
