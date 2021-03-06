import React, { useEffect } from 'react';
import { useGlobalContext } from '../context';
import Header from '../components/shared/Header';
import PortfolioCards from '../components/PortfolioCards';
import Links from '../components/shared/Links';
import './Portfolio.scss';

const Portfolio = () => {
  const { header, links, routerLinks } = useGlobalContext();
  const headerText = header[0];
  const routerLinkText = routerLinks[0];

  useEffect(() => {
    document.title = 'Nelson Foltz | Portfolio';
  }, []);

  return (
    <>
      <header>
        <Header headerText={headerText} />
        <Links data={links} routerLinkText={routerLinkText} />
      </header>
      <main className="portfolio-main">
        <PortfolioCards />
      </main>
    </>
  );
};

export default Portfolio;
