import React from 'react';
import { useGlobalContext } from '../context';

const PortfolioCards = () => {
  const { cards } = useGlobalContext();
  console.log('cards', cards);
  return (
    <section>
      {cards.map((card, index) => {
        const {
          image,
          title,
          description,
          role,
          skills,
          additionalNotes,
          link
        } = card;
        return (
          <article key={index}>
            <p>{image}</p>
            <p>{title}</p>
            <p>{description}</p>
            <p>{role}</p>
            <p>{skills}</p>
            <p>{additionalNotes}</p>
            <p>{link}</p>
          </article>
        );
      })}
    </section>
  );
};

export default PortfolioCards;

// https://codepen.io/lottejackson/pen/PwvjPj?editors=1100
