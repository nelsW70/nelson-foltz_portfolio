import React from 'react';
import './ResumeHeader.scss';
import ResumeLinks from './ResumeLinks';

const ResumeHeader = () => {
  return (
    <header className="resume-header">
      <h1>Nelson Foltz</h1>
      <ResumeLinks />
      <figure>
        <div>
          <span class="submitstory">
            <p class="storyone">download</p>
          </span>
          <span class="submitstory">
            <p class="storytwo">
              <a href="/Nelson_Foltz.pdf" download>
                pdf
              </a>
            </p>
          </span>
        </div>
      </figure>
    </header>
  );
};

export default ResumeHeader;
