import { useLocation, useNavigate } from 'react-router-dom';

export const useQueryParams = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const setQueryParam = (key: string, value: string) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set(key, value);
    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  return setQueryParam;
};
