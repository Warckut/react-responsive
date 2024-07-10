import { useCallback, useEffect, useRef, useState } from 'react';

function useMediaQuery({ query }: { query: string }) {
  const ref = useRef(window.matchMedia(query));
  const [match, setMatch] = useState<boolean>(false);

  const mathChangeHandler = useCallback(
    (e: MediaQueryListEvent) => {
      setMatch(e.matches);
    },
    [setMatch],
  );

  useEffect(() => {
    const target = ref.current;
    setMatch(target.matches);
    target.addEventListener('change', mathChangeHandler);
    return () => {
      target.removeEventListener('change', mathChangeHandler);
    };
  }, [mathChangeHandler, ref]);

  return match;
}

export default useMediaQuery;
