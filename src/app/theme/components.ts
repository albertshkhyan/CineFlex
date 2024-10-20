import styled, { css, RuleSet } from 'styled-components';
import { Colors } from '@app/types/theme/colors.types';
import { typography } from './typography';
import { FontFamily, FontWeights } from '@app/types/theme/font.types';
import { ButtonVariant } from '@app/types/theme/button.types';

export const buttonStyles: Record<
  ButtonVariant | 'base' | 'primaryHover' | 'secondaryHover' | 'outlineHover',
  RuleSet<object>
> = {
  base: css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: ${({ theme }) => theme.typography.button.fontFamily};
    font-weight: ${({ theme }) => theme.typography.button.fontWeight};
    border-radius: 4px;
    transition: all 0.3s ease;
    cursor: pointer;
    &:hover {
      opacity: 0.9;
    }
  `,
  primary: css`
    background-color: ${({ theme }) => theme.palette.primary.dark};
    color: ${({ theme }) => theme.palette.primary.light};
    border: none;
  `,
  primaryHover: css`
    background-color: ${({ theme }) => theme.palette.primary.dark};
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.palette.secondary.main};
    color: ${({ theme }) => theme.palette.secondary.dark};
    border: none;
  `,
  secondaryHover: css`
    background-color: ${({ theme }) => theme.palette.secondary.dark};
  `,
  outline: css`
    background-color: transparent;
    color: ${({ theme }) => theme.palette.background.paper};
    border: 1px solid ${({ theme }) => theme.palette.primary.dark};
  `,
  outlineHover: css`
    border-color: ${({ theme }) => theme.palette.primary.dark};
    color: ${({ theme }) => theme.palette.primary.dark};
  `,
};

export const SecondaryButton = styled.button`
  background-color: ${Colors.secondaryMain};
  color: ${Colors.white};
  font-family: ${typography.body.fontFamily};
  font-size: ${typography.body.fontSize};
  font-weight: ${typography.body.fontWeight};
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: ${Colors.secondaryLight};
  }
`;

export const Card = styled.div`
  background-color: ${Colors.paper};
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-family: ${typography.h1.fontFamily};
  font-size: ${typography.h1.fontSize};
  font-weight: ${typography.h1.fontWeight};
  color: ${typography.h1.color};
  margin: 0;
  padding: 0;
`;

interface ParagraphProps {
  size?: string;
  weight?: keyof typeof FontWeights;
  color?: keyof typeof Colors;
  lineHeight?: string;
  fontFamily?: keyof typeof FontFamily;
  textAlign?: 'left' | 'right' | 'center' | 'justify';
}

export const Paragraph = styled.p<ParagraphProps>`
  font-family: ${({ fontFamily }) => FontFamily[fontFamily || 'Tajawal']};
  font-size: ${({ size }) => size || '18px'};
  font-weight: ${({ weight }) =>
    weight ? FontWeights[weight] : FontWeights.regular};
  color: ${({ color }) => (color ? Colors[color] : Colors.white)};
  line-height: ${({ lineHeight }) => lineHeight || '1.5'};
  text-align: ${({ textAlign }) => textAlign || 'left'};
`;

interface GaramondTextProps {
  size?: string;
  weight?: keyof typeof FontWeights;
  color?: keyof typeof Colors;
}

export const GaramondText = styled.p<GaramondTextProps>`
  font-family: ${FontFamily.Garamond};
  font-size: ${({ size }) => size || '18px'};
  font-weight: ${({ weight }) =>
    weight ? FontWeights[weight] : FontWeights.regular};
  color: ${({ color }) => (color ? Colors[color] : Colors.white)};
`;
