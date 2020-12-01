import React from 'react';

import PortfolioHeader from '../components/PortfolioHeader';
import PortfolioCards from '../components/PortfolioCards';

const Portfolio = () => {
  return (
    <>
      <PortfolioHeader />
      <main>
        <PortfolioCards />
      </main>
    </>
  );
};

export default Portfolio;
