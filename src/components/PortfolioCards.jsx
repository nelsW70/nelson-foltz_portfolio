import React from 'react';
import { useGlobalContext } from '../context';
import './PortfolioCards.scss';

const PortfolioCards = () => {
  const { cards } = useGlobalContext();
  return (
    <ul className="cards">
      {cards.map((card, index) => {
        const { image, altText, title, role, skills, siteType, link } = card;
        return (
          <li className="cards__item" key={index}>
            <div className="card">
              <div
                className="card__image card__image--fence"
                style={{ backgroundImage: `url(${image})` }}
                role="img"
                aria-label={altText}
              ></div>
              <div className="card__content">
                <div className="card__title">{title}</div>
                <p className="card__text">{role}</p>
                <p className="card__skills">{skills}</p>
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--block card__btn"
                  aria-label={`link to ${title} website`}
                >
                  view {siteType}
                </a>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default PortfolioCards;
