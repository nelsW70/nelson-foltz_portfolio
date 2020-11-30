import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

const PortfolioLinks = () => {
  const { links } = useGlobalContext();
  console.log('links', links);
  return (
    <section>
      <ul className="portfolio-links">
        <Link to="/resume">
          <li className="portfolio-link">resume</li>
        </Link>
        {links.map((item, index) => {
          return (
            <a key={index} href={item.url} target="_blank" rel="noreferrer">
              <li className="portfolio-link">{item.text}</li>
            </a>
          );
        })}
      </ul>
    </section>
  );
};

export default PortfolioLinks;
