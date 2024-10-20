import React from 'react';
import styled, { css } from 'styled-components';
import { buttonStyles } from '@app/theme/components';
import { ButtonVariant, isButtonVariant } from '@app/types/theme/button.types';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

const StyledButton = styled.button<ButtonProps>`
  ${({ variant = 'primary' }) => {
    if (isButtonVariant(variant)) {
      return css`
        ${buttonStyles.base};
        ${buttonStyles[variant]};
      `;
    }
    return buttonStyles.base;
  }}
`;

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  onClick,
  ...rest
}) => {
  return (
    <StyledButton variant={variant} onClick={onClick} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
