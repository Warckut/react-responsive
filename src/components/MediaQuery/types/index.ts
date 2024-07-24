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

export type NotEmpty<T> = {
  [K in keyof Required<T>]: Pick<Required<T>, K> & Pick<T, Exclude<keyof T, K>>;
}[keyof T];

export type MediaQueryProps = NotEmpty<MediaQueryParams> & {
  children: ReactNode | ((matches: boolean) => ReactNode);
};
