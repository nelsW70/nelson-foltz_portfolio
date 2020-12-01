import React from 'react';
import { useGlobalContext } from '../context';

// const PortfolioCards = () => {
//   const { cards } = useGlobalContext();
//   console.log('cards', cards);
//   return (
//     <section>
//       {cards.map((card, index) => {
//         const {
//           image,
//           title,
//           description,
//           role,
//           skills,
//           additionalNotes,
//           link
//         } = card;
//         return (
//           <article key={index}>
//             <p>{image}</p>
//             <p>{title}</p>
//             <p>{description}</p>
//             <p>{role}</p>
//             <p>{skills}</p>
//             <p>{additionalNotes}</p>
//             <p>{link}</p>
//           </article>
//         );
//       })}
//     </section>
//   );
// };
const PortfolioCards = () => {
  const { cards } = useGlobalContext();
  console.log('cards', cards);
  return (
    <ul className="cards">
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
          <li className="cards__item" key={index}>
            <div className="card">
              <div
                className="card__image card__image--fence"
                style={{ backgroundImage: `url(${image})` }}
              ></div>
              <div className="card__content">
                <div className="card__title">{title}</div>
                <p className="card__text">
                  This is the shorthand for flex-grow, flex-shrink and
                  flex-basis combined. The second and third parameters
                  (flex-shrink and flex-basis) are optional. Default is 0 1
                  auto.{' '}
                </p>
                <button className="btn btn--block card__btn">Button</button>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default PortfolioCards;

// https://codepen.io/lottejackson/pen/PwvjPj?editors=1100
