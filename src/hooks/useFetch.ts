import { useEffect, useRef, useState } from 'react';

/**
 * CustomHook that executes a database query
 * @param {() => Promise<T>} request Query to execute
 * @returns fetched & isLoading & reFetch
 */
const useFetch = <T>(request: () => Promise<T>) => {
  const [fetched, setFetched] = useState<T>();
  const isLoading = useRef(false);
  const isMounted = useRef(true);

  const [update, setUpdate] = useState(false);

  const reFetch = () => setUpdate(u => !u);

  useEffect(() => {
    isMounted.current = true;

    if (!request) return;

    const getData = async () => {
      isLoading.current = true;
      setFetched(undefined);

      const response = (await request()) as T;

      if (isMounted.current && response) {
        isLoading.current = false;
        setFetched(response);
      }
    };

    if (isMounted.current && !isLoading.current) getData();

    return () => {
      isMounted.current = false;
      isLoading.current = false;
    };
  }, [request, update]);

  return { fetched, isLoading: isLoading.current, reFetch };
};

export default useFetch;
