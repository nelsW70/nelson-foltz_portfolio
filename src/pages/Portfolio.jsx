import React, { useEffect } from 'react';

import PortfolioHeader from '../components/PortfolioHeader';
import PortfolioCards from '../components/PortfolioCards';

const Portfolio = () => {
  useEffect(() => {
    document.title = 'Nelson Foltz | Portfolio';
  }, []);
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
