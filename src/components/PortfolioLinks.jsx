import React from 'react';
import { useGlobalContext } from '../context';

const PortfolioLinks = () => {
  const { links } = useGlobalContext();
  console.log('links', links);
  return (
    <div>
      {links.map((item, index) => {
        return <div key={index}>{item.text}</div>;
      })}
    </div>
  );
};

export default PortfolioLinks;
