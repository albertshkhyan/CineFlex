import { Breakpoints } from '@app/types/theme/breakpoints.types';

const breakpointValues = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

export const breakpoints: Breakpoints = {
  values: breakpointValues,
  up: (breakpoint) => `@media (min-width:${breakpointValues[breakpoint]}px)`,
  down: (breakpoint) => `@media (max-width:${breakpointValues[breakpoint]}px)`,
  between: (start, end) =>
    `@media (min-width:${breakpointValues[start]}px) and (max-width:${breakpointValues[end]}px)`,
  only: (breakpoint) =>
    `@media (min-width:${breakpointValues[breakpoint]}px) and (max-width:${
      breakpointValues[breakpoint] + 599
    }px)`,
};
