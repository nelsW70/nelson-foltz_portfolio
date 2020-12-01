import React from 'react';
import PortfolioLinks from './PortfolioLinks';
import './PortfolioHeader.scss';

const PortfolioHeader = () => {
  return (
    <header className="portfolio-header">
      <h1>
        <span>Nelson Foltz</span> is a front-end developer who seeks
        collaborative environments where thoughtful development and beauty are
        the goal.
      </h1>
      <PortfolioLinks />
    </header>
  );
};

export default PortfolioHeader;
