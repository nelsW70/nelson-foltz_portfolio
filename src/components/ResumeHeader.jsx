import React from 'react';
import ResumeLinks from './ResumeLinks';
import './ResumeHeader.scss';
import Pdf from '../downloads/Nelson_Foltz.pdf';

const ResumeHeader = () => {
  return (
    <header className="resume-header">
      <h1 className="text-red">Nelson Foltz</h1>
      <ResumeLinks />
      <article className="download-button">
        <figure>
          <div>
            <span className="resume-button">
              <p className="button-face">download</p>
            </span>
            <span className="resume-button">
              <p className="button-back">
                <a href={Pdf} target="_blank" rel="noreferrer" download>
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
