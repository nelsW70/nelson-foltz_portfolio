import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Links = props => {
  const [data] = useState(props.data);
  const [routerLinkText] = useState(props.routerLinkText);
  console.log(data);
  console.log(routerLinkText);

  return (
    <nav className="portfolio-links">
      <ul>
        <Link to={`/${routerLinkText}`}>
          <li>{routerLinkText}</li>
        </Link>
        {data.map((item, index) => {
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

export default Links;
