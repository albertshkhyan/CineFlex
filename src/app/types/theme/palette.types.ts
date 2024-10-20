import { Colors } from '@app/types/theme/colors.types';

export interface ColorPalette {
  main: string;
  light?: string;
  dark?: string;
  contrastText?: string;
}

export interface ThemeColors {
  primary: ColorPalette;
  secondary: ColorPalette;
  background: {
    default: string;
    paper: string;
  };
  text: {
    primary: string;
    secondary: string;
    disabled: string;
  };
  error: ColorPalette;
  warning: ColorPalette;
  info: ColorPalette;
  success: ColorPalette;
}

export const themeColors: ThemeColors = {
  primary: {
    main: Colors.primaryMain,
    light: Colors.primaryLight,
    dark: Colors.primaryDark,
    contrastText: Colors.white,
  },
  secondary: {
    main: Colors.secondaryMain,
    light: Colors.secondaryLight,
    dark: Colors.secondaryDark,
    contrastText: Colors.white,
  },
  background: {
    default: Colors.white,
    paper: Colors.paper,
  },
  text: {
    primary: Colors.black,
    secondary: Colors.gray,
    disabled: Colors.lightGray,
  },
  error: {
    main: Colors.errorMain,
    contrastText: Colors.white,
  },
  warning: {
    main: Colors.warningMain,
    contrastText: Colors.black,
  },
  info: {
    main: Colors.infoMain,
    contrastText: Colors.white,
  },
  success: {
    main: Colors.successMain,
    contrastText: Colors.white,
  },
};
