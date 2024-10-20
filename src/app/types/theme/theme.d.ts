import 'styled-components';
import { ThemeColors } from '../theme/palette.types';
import { Typography } from '../theme/typography.types';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: ThemeColors;
    typography: Typography;
  }
}
