import React from 'react';
import { useGlobalContext } from '../context';

const PortfolioLinks = () => {
  const { links } = useGlobalContext();
  console.log('links', links);
  return <nav>i'm the portfolio links</nav>;
};

export default PortfolioLinks;
