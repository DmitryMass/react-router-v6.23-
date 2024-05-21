import { FC } from 'react';
import { useRouteError } from 'react-router-dom';
import { type TError } from '../../types/generalTypes';

const ErrorComponent: FC = () => {
  const error = useRouteError() as TError;
  return (
    <div className='min-h-screen w-full flex justify-center items-center flex-col gap-2'>
      <h1 className='text-md25 font-medium'>An error occurred!</h1>
      <p className='text-md20 text-red-600'>{error?.statusText}</p>
    </div>
  );
};

export default ErrorComponent;
