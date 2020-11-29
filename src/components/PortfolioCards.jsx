import React from 'react';
import { useGlobalContext } from '../context';

const PortfolioCards = () => {
  const { cards } = useGlobalContext();
  console.log('cards', cards);
  return <section>i'm a buncha cards</section>;
};

export default PortfolioCards;
