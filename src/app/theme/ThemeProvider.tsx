import React, { ReactNode } from 'react';
import {
  ThemeProvider as StyledThemeProvider,
  DefaultTheme,
} from 'styled-components';
import { typography } from './typography';
import { palette } from './palette';

interface ThemeProviderProps {
  children: ReactNode;
}

const theme: DefaultTheme = {
  typography,
  palette,
};

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};

export default ThemeProvider;
