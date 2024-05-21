import { FC } from 'react';
import { Navigation } from '../ui/Navigation';
import { Outlet } from 'react-router-dom';

const RootLayout: FC = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default RootLayout;
