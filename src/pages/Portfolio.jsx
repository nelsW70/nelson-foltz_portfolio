import React from 'react';

import PortfolioHeader from '../components/PortfolioHeader';
import PortfolioLinks from '../components/PortfolioLinks';
import PortfolioCards from '../components/PortfolioCards';

const Portfolio = () => {
  return (
    <main>
      <PortfolioHeader />
      <PortfolioLinks />
      <PortfolioCards />
    </main>
  );
};

export default Portfolio;
