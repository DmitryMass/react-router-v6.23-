import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const BooksLayout: FC = () => {
  return (
    <>
      <h1></h1>
      <Outlet />
    </>
  );
};

export default BooksLayout;
