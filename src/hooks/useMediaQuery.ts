import { useEffect, useState } from 'react';

function useMediaQuery({ query }: { query: string }) {
  const [match, setMatch] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mathChangeHandler = (e: MediaQueryListEvent) => setMatch(e.matches);

    const target = window.matchMedia(query);
    setMatch(target.matches);

    target.addEventListener('change', mathChangeHandler);
    return () => {
      target.removeEventListener('change', mathChangeHandler);
    };
  }, [setMatch, query]);

  return match;
}

export default useMediaQuery;
