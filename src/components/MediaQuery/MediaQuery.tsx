import { useMemo } from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';
import { MediaQueryParams, MediaQueryProps } from './types/index';
import { camelToKebabCase } from './utils';

const getQuery = (params: MediaQueryParams) => {
  const result = Object.entries(params)
    .map(([key, value]) => {
      if (!value) return '';

      if (key === 'orientation') return `(orientation: ${value})`;

      if (key === 'minResolution' || key === 'maxResolution') {
        const resolution = typeof value === 'number' ? `${value}dppx` : value;
        return `(${camelToKebabCase(key)}: ${resolution})`;
      }

      return `(${camelToKebabCase(key)}: ${value}px)`;
    })
    .filter(Boolean)
    .join(' and ');

  return result;
};

function MediaQuery({ children, ...mediaQuery }: MediaQueryProps) {
  const query = useMemo(() => getQuery(mediaQuery), [mediaQuery]);
  const matches = useMediaQuery({ query });

  if (typeof children === 'function') {
    return <>{children(matches)}</>;
  }

  return <>{matches && children}</>;
}

export default MediaQuery;
