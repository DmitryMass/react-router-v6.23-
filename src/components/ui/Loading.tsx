import { FC } from 'react';

const Loading: FC = () => {
  return (
    <span className='block size-10 border-4 border-black border-t-green-500 border-r-green-500 animate-spin' />
  );
};

export default Loading;
