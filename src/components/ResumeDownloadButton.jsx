import React from 'react';
import './ResumeDownloadButton.scss';

const ResumeDownloadButton = () => {
  return (
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
  );
};

export default ResumeDownloadButton;
