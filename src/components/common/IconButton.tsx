import React from 'react';
import styled, { css } from 'styled-components';
import { buttonStyles } from '@app/theme/components';
import { ButtonVariant, isButtonVariant } from '@app/types/theme/button.types';

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  icon: React.ReactNode;
  label?: string;
}

export interface StyledIconButtonProps {
  variant?: ButtonVariant;
}

const StyledIconButton = styled.button<StyledIconButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border: none;
  background: transparent;
  cursor: pointer;

  ${({ variant = 'primary' }) => {
    if (isButtonVariant(variant)) {
      return css`
        ${buttonStyles.base};
        ${buttonStyles[variant]};
      `;
    }
    return buttonStyles.base;
  }}

  &:hover {
    ${({ variant = 'primary' }) =>
      isButtonVariant(variant) &&
      css`
        ${buttonStyles[`${variant}Hover`]};
      `}
  }
`;

const IconWrapper = styled.div<{ hasLabel: boolean }>`
  margin-right: ${({ hasLabel }) => (hasLabel ? '8px' : '0')};
  display: flex;
  align-items: center;
`;

const IconButton: React.FC<IconButtonProps> = ({
  variant = 'primary',
  icon,
  label,
  ...rest
}) => {
  return (
    <StyledIconButton variant={variant} {...rest}>
      <IconWrapper hasLabel={!!label}>{icon}</IconWrapper>
      {label && <span>{label}</span>}
    </StyledIconButton>
  );
};

export default IconButton;
