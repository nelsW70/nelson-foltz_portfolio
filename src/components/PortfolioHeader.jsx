import React from 'react';
import Links from './shared/Links';
import './PortfolioHeader.scss';
import { useGlobalContext } from '../context';

const PortfolioHeader = () => {
  const { links, routerLinks } = useGlobalContext();
  const routerLinkText = routerLinks[0];

  return (
    <header className="portfolio-header">
      <h1>
        <span className="text-red">Nelson Foltz</span> is a front-end developer
        who seeks collaborative environments where thoughtful development and
        beauty are the goal.
      </h1>
      <Links data={links} routerLinkText={routerLinkText} />
    </header>
  );
};

export default PortfolioHeader;
