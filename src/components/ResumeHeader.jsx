import React from 'react';
import Links from './shared/Links';
import './ResumeHeader.scss';
import { useGlobalContext } from '../context';

const ResumeHeader = () => {
  const { links, routerLinks } = useGlobalContext();
  const routerLinkText = routerLinks[1];

  return (
    <header className="resume-header">
      <h1 className="text-red">Nelson Foltz</h1>
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
  );
};

export default ResumeHeader;
