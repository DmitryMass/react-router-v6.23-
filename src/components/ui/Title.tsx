import { ReactNode } from 'react';

export const Title = ({ children }: { children: ReactNode }) => {
  return <h1 className='text-black bg-green-500 w-full'>{children}</h1>;
};
