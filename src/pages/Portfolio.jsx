import React from 'react';

import PortfolioHeader from '../components/PortfolioHeader';
import PortfolioCards from '../components/PortfolioCards';

import Footer from '../components/Footer';

const Portfolio = () => {
  return (
    <>
      <PortfolioHeader />
      <main>
        <PortfolioCards />
      </main>
      <Footer />
    </>
  );
};

export default Portfolio;
