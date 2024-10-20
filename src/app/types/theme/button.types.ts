export type ButtonVariant = 'primary' | 'secondary' | 'outline';

export type ButtonSize = 'small' | 'medium' | 'large';

export const isButtonVariant = (variant: string): variant is ButtonVariant => {
  return ['primary', 'secondary', 'outline'].includes(variant);
};
