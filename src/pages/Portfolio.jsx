import React from 'react';
import { useGlobalContext } from '../context';

const Portfolio = () => {
  const { links } = useGlobalContext();
  console.log('links', links);
  return <div>portfolio page</div>;
};

export default Portfolio;
