import clsx from 'clsx';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation: FC = () => {
  return (
    <header className='py-5'>
      <nav className='flex justify-center items-center gap-6'>
        <NavLink
          className={({ isActive }) =>
            clsx('border p-2.5 rounded-md', isActive && 'shadow-md bg-blue-100')
          }
          to={'/books'}
        >
          Classic Book catalog
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            clsx('border p-2.5 rounded-md', isActive && 'shadow-md bg-blue-100')
          }
          to={'/fiction'}
        >
          Fiction Book catalog
        </NavLink>
      </nav>
    </header>
  );
};
