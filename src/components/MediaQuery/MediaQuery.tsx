import { useMemo, Fragment } from 'react';
import useMediaQuery from '../../hooks/useMediaQuery/useMediaQuery';
import { MediaQueryParams, MediaQueryProps, ResolutionType } from './types/index';

function formatResolution(resolution: ResolutionType) {
  return typeof resolution === 'number' ? `${resolution}dppx` : resolution;
}

const getQuery = ({
  orientation,
  minResolution,
  maxResolution,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
}: MediaQueryParams) =>
  [
    orientation && `(orientation: ${orientation})`,
    minResolution && `(min-resolution: ${formatResolution(minResolution)})`,
    maxResolution && `(max-resolution: ${formatResolution(maxResolution)})`,
    minWidth && `(min-width: ${minWidth}px)`,
    maxWidth && `(max-width: ${maxWidth}px)`,
    minHeight && `(min-height: ${minHeight}px)`,
    maxHeight && `(max-height: ${maxHeight}px)`,
  ]
    .filter((param) => typeof param !== 'boolean')
    .join(' and ');

function MediaQuery({ children, ...mediaQuery }: MediaQueryProps) {
  const query = useMemo(() => getQuery(mediaQuery), [mediaQuery]);
  const matches = useMediaQuery({ query });

  if (!matches) return null;

  if (typeof children === 'function') {
    return <Fragment>{children(matches)}</Fragment>;
  }

  return <Fragment>{children}</Fragment>;
}

export default MediaQuery;
