import React from 'react';

import PortfolioHeader from '../components/PortfolioHeader';
import PortfolioLinks from '../components/PortfolioLinks';
import PortfolioCards from '../components/PortfolioCards';

import Footer from '../components/Footer';

const Portfolio = () => {
  return (
    <>
      <PortfolioHeader />
      <main>
        <PortfolioLinks />
        <PortfolioCards />
      </main>
      <Footer />
    </>
  );
};

export default Portfolio;
