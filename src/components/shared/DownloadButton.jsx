import React from 'react';
import './DownloadButton.scss';

const DownloadButton = () => {
  return (
    <article className="download-button" tabindex="0" role="button">
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

export default DownloadButton;
