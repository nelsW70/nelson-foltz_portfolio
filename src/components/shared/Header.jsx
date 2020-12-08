import React, { useState } from 'react';

const Header = props => {
  const [headerText] = useState(props.headerText);
  const { title, content } = headerText;

  return (
    <h1>
      <span className="text-red">{title}</span> {content ? content : null}
    </h1>
  );
};

export default Header;
