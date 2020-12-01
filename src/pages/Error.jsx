import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section>
      <p>Sorry, that page does not exist.</p>
      <div>
        <Link to="/">home</Link>
      </div>
    </section>
  );
};

export default Error;
