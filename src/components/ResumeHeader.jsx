import React from 'react';
import './ResumeHeader.scss';
import ResumeLinks from './ResumeLinks';

const ResumeHeader = () => {
  return (
    <header className="resume-header">
      <h1>Nelson Foltz</h1>
      <ResumeLinks />
      <article className="download-button">
        <figure>
          <div>
            <span className="resume-button">
              <p className="button-face">download</p>
            </span>
            <span className="resume-button">
              <p className="button-back">
                <a href="/Nelson_Foltz.pdf" download>
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
