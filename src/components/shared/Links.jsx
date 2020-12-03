import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Links.scss';

const Links = props => {
  const [data] = useState(props.data);
  const [routerLinkText] = useState(props.routerLinkText);

  return (
    <nav className="portfolio-links" role="navigation">
      <ul>
        <Link to={`/${routerLinkText.path}`}>
          <li>{routerLinkText.text}</li>
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
