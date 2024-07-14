import { ReactNode } from 'react';

export type ResolutionType = `${number}${'dppx' | 'dpi' | 'dpcm'}` | number;
export type OrientationType = 'portrait' | 'landscape';

export type MediaQueryParams = {
  orientation?: OrientationType;
  minResolution?: ResolutionType;
  maxResolution?: ResolutionType;
  minWidth?: number;
  maxWidth?: number;
  minHeight?: number;
  maxHeight?: number;
};

export type HasAtLeastOne<T> = {
  [K in keyof T]: Required<Pick<T, K>>;
}[keyof T];

export type MediaQueryProps = HasAtLeastOne<MediaQueryParams> & {
  children: ReactNode | ((matches: boolean) => ReactNode);
};
