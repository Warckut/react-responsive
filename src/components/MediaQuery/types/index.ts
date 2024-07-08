export type Resolution = `${number}${'dppx' | 'dpi' | 'dpcm'}` | number;

export type MediaQueryParams = {
  orientation?: 'portrait' | 'landscape';
  minResolution?: Resolution;
  maxResolution?: Resolution;
  minWidth?: number;
  maxWidth?: number;
  minHeight?: number;
  maxHeight?: number;
};

export type MediaQueryProps = MediaQueryParams & {
  children: React.ReactNode | ((matches: boolean) => React.ReactNode);
};