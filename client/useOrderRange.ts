import useSWR from 'swr';

export const useOrderRange = () => {
  const {data, error, isLoading} = useSWR('/api/range', (...args) => fetch(...args).then(res => res.json()));
  return {
    range: data,
    isLoading,
    error,
  };
}
