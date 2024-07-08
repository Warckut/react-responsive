import React, { useMemo } from 'react';
import useMediaQuery from '../../hooks/useMediaQuery/useMediaQuery';
import { MediaQueryParams, MediaQueryProps, Resolution } from './types/index';

function resolution(v: Resolution) {
  return typeof v === 'number' ? `${v}dppx` : v;
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
    ...(orientation ? [`(orientation: ${orientation})`] : []),
    ...(minResolution ? [`(min-resolution: ${resolution(minResolution)})`] : []),
    ...(maxResolution ? [`(max-resolution: ${resolution(maxResolution)})`] : []),
    ...(minWidth ? [`(min-width: ${minWidth}px)`] : []),
    ...(maxWidth ? [`(max-width: ${maxWidth}px)`] : []),
    ...(minHeight ? [`(min-height: ${minHeight}px)`] : []),
    ...(maxHeight ? [`(max-height: ${maxHeight}px)`] : []),
  ].join(' and ');

function MediaQuery({ children, ...mediaQuery }: MediaQueryProps) {
  const query = useMemo(() => getQuery(mediaQuery), [mediaQuery]);
  const matches = useMediaQuery({ query });

  if (typeof children === 'function') {
    return <>{children(matches)}</>;
  }

  return matches ? <>{children}</> : null;
}

export default MediaQuery;
