import React from 'react';
import { useGlobalContext } from '../context';

const Resume = () => {
  const { cards } = useGlobalContext();
  console.log('cards', cards);
  return <div>resume page</div>;
};

export default Resume;
