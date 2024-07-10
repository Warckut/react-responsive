import { ReactNode } from 'react';

export type ResolutionType = `${number}${'dppx' | 'dpi' | 'dpcm'}` | number;

export type MediaQueryParams = {
  orientation?: 'portrait' | 'landscape';
  minResolution?: ResolutionType;
  maxResolution?: ResolutionType;
  minWidth?: number;
  maxWidth?: number;
  minHeight?: number;
  maxHeight?: number;
};

export type MediaQueryProps = MediaQueryParams & {
  children: ReactNode | ((matches: boolean) => ReactNode);
};
