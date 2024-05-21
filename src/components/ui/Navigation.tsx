import { FC } from 'react';
import { Link } from 'react-router-dom';

export const Navigation: FC = () => {
  return (
    <div>
      <h1>Basic Navigation</h1>
      <div>
        <Link to={'/books'}>Classic Book catalog</Link>
        <Link to={'/fiction'}>Fiction Book catalog</Link>
      </div>
    </div>
  );
};
