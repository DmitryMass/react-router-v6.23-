import { useAsyncError } from 'react-router-dom';
import { type TError } from '../../types/generalTypes';

export const AsyncError = () => {
  const error = useAsyncError() as TError;
  return <div>AsyncError: {error.statusText}</div>;
};
