export const useGetQueryParams = (url: URL) => {
  const queryParams = new URLSearchParams(url.search);
  return queryParams.get('filebedra');
};
