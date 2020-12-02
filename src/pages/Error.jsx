import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section>
      <h1>
        Sorry, that page does not exist but you can go{' '}
        <span>
          <Link to="/">home</Link>
        </span>
      </h1>
    </section>
  );
};

export default Error;
