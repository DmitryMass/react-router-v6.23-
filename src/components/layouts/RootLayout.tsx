import { FC } from 'react';
import { Navigation } from '../ui/Navigation';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';

const RootLayout: FC = () => {
  return (
    <div className='flex flex-col justify-between h-full'>
      <Navigation />
      <main className='max-w-mainContainer w-full mx-auto px-2.5 flex-1'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
