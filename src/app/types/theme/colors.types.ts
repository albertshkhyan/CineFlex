export interface ColorDefinition {
  main: string;
  light?: string;
  dark?: string;
  contrastText?: string;
}

export const Colors = {
  white: '#FFFFFF',
  black: '#040404',
  gray: '#858688',
  primaryLight: '#6B94FF',
  primaryDark: '#0036BB',
  primaryMain: '#3B6BF0E5',
  secondaryMain: '#3B486D',
  paper: '#040404',
  lightGray: '#F1F1F1',
  darkGray: '#3B486D',
  secondaryLight: '#6F78A0',
  secondaryDark: '#252E49',
  errorMain: '#FF4F5E',
  warningMain: '#FFA726',
  infoMain: '#29B6F6',
  successMain: '#66BB6A',
};

export type ColorsType = typeof Colors;
