import { FontFamily } from './font.types';
import { FontWeight } from './font.types';

export interface TypographyStyle {
  fontFamily: FontFamily;
  fontSize: string;
  fontWeight: FontWeight;
  color: string;
  lineHeight: string;
  letterSpacing: string;
}

export interface Typography {
  h1: TypographyStyle;
  h2: TypographyStyle;
  h3: TypographyStyle;
  h4: TypographyStyle;
  h5: TypographyStyle;
  h6: TypographyStyle;
  subtitle1: TypographyStyle;
  subtitle2: TypographyStyle;
  body: TypographyStyle;
  caption: TypographyStyle;
  button: TypographyStyle;
}

export const LineHeights = {
  h1: '43px',
  h2: '38px',
  h3: '35px',
  h4: '30px',
  h5: '26px',
  h6: '24px',
  subtitle1: '28px',
  subtitle2: '26px',
  body: '24px',
  caption: '20px',
  button: '36px',
};

export const LetterSpacings = {
  h1: '0px',
  h2: '0px',
  h3: '0px',
  h4: '0px',
  h5: '0px',
  h6: '0px',
  subtitle1: '0.1px',
  subtitle2: '0.1px',
  body: '0.15px',
  caption: '0.2px',
  button: '-0.32px',
};

export enum TextVariant {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
  Subtitle1 = 'subtitle1',
  Subtitle2 = 'subtitle2',
  Body = 'body',
  Caption = 'caption',
  Button = 'button',
}
