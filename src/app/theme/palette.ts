import { ThemeColors } from '@app/types/theme/palette.types';
import { Colors } from '@app/types/theme/colors.types';

export const palette: ThemeColors = {
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
    default: Colors.darkGray,
    paper: Colors.lightGray,
  },
  text: {
    primary: Colors.lightGray,
    secondary: Colors.gray,
    disabled: Colors.darkGray,
  },
  error: {
    main: Colors.errorMain,
    contrastText: Colors.white,
  },
  warning: {
    main: Colors.warningMain,
    contrastText: Colors.white,
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
