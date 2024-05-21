import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const BooksLayout: FC = () => {
  return (
    <div>
      <h1>BooksLayout for FICTION and CLASSIC</h1>
      <Outlet />
    </div>
  );
};

export default BooksLayout;
