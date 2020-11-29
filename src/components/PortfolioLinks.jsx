import React from 'react';
import { useGlobalContext } from '../context';

const PortfolioLinks = () => {
  const { links } = useGlobalContext();
  console.log('links', links);
  return (
    <nav>
      {links.map((item, index) => {
        return <div key={index}>{item.text}</div>;
      })}
    </nav>
  );
};

export default PortfolioLinks;
