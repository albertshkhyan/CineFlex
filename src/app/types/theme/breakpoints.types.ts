export type Breakpoints = {
  values: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  up: (breakpoint: keyof Breakpoints['values']) => string;
  down: (breakpoint: keyof Breakpoints['values']) => string;
  between: (
    start: keyof Breakpoints['values'],
    end: keyof Breakpoints['values']
  ) => string;
  only: (breakpoint: keyof Breakpoints['values']) => string;
};
