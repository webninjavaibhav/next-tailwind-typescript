import { StaticImageData } from 'next/image';

export type TagTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'small';
export type ColorTypes =
  | 'primaryGreen'
  | 'lightGreen'
  | 'darkGreen'
  | 'darkGrey'
  | 'black'
  | 'white'
  | 'darkWhite'
  | 'grey'
  | 'red'
  | 'secondaryText';

export type FontWeightTypes = 'thin' | 'light' | 'normal' | 'semibold' | 'bold';

export type LineHeightTypes = 'tight' | 'snug';

export type PaginationParameterTypes = {
  totalCount: number;
  pageSize: number;
  siblingCount?: number;
  currentPage: number;
};
