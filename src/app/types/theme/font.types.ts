export enum FontFamily {
  Tajawal = "'Tajawal', sans-serif",
  Garamond = "'Garamond', serif",
}

export const FontWeights = {
  thin: 100,
  extraLight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
  extraBold: 800,
  black: 900,
} as const;

export type FontWeight = (typeof FontWeights)[keyof typeof FontWeights];
