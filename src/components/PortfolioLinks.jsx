import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

const PortfolioLinks = () => {
  const { links } = useGlobalContext();
  return (
    <nav className="portfolio-links">
      <ul>
        <Link to="/resume">
          <li>resume</li>
        </Link>
        {links.map((item, index) => {
          return (
            <a key={index} href={item.url} target="_blank" rel="noreferrer">
              <li>{item.text}</li>
            </a>
          );
        })}
      </ul>
    </nav>
  );
};

export default PortfolioLinks;
