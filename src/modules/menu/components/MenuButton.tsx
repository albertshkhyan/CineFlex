import React from 'react';
import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import { ButtonVariant, isButtonVariant } from '@app/types/theme/button.types';
import { buttonStyles } from '@app/theme/components';
import { Colors } from '@app/types/theme/colors.types';
import { FontFamily, FontWeights } from '@app/types/theme/font.types';

interface StyledButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  isActive: boolean;
  isCollapsed: boolean;
}

interface MenuButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
  label: string;
  variant?: ButtonVariant;
  isActive?: boolean;
  isCollapsed: boolean;
}

const StyledButton = styled(motion.button)<StyledButtonProps>`
  display: flex;
  padding: 0;
  border: none;
  cursor: pointer;
  width: 100%;
  transition: all 0.3s ease;

  ${({ variant }) => css`
    ${buttonStyles.base};
    ${buttonStyles[variant]};
  `}
  background-color: transparent;
  align-items: ${({ isCollapsed }) => (isCollapsed ? 'center' : 'baseline')};
  transform: none;

  justify-content: ${({ isCollapsed }) =>
    isCollapsed ? 'center' : 'flex-start'};
  padding-left: ${({ isCollapsed }) => (isCollapsed ? '0' : '24px')};
  font-weight: normal;
  //align-items: center;

  background: transparent;
  &:not(:first-of-type) {
    margin-bottom: ${({ isCollapsed }) => (isCollapsed ? ' 64px' : '19px')};
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  ${({ isActive, isCollapsed }) =>
    isActive &&
    css`
      background-color: ${Colors.secondaryMain};
      border-radius: ${isCollapsed ? '50px' : '12px'};
      width: ${isCollapsed ? '82px' : '100%'};
      height: ${isCollapsed ? '82px' : '72px'};
      margin-bottom: 34px !important;
      margin-top: 34px;
      font-weight: ${FontWeights.bold};
    `}

  &:hover {
    opacity: 0.9;
  }
`;

const IconWrapper = styled.div<{ isCollapsed: boolean }>`
  margin-right: ${({ isCollapsed }) => (isCollapsed ? '0' : '10px')};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 25px;
  height: 25px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Label = styled(motion.span)<{ isCollapsed: boolean }>`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: ${({ isCollapsed }) => (isCollapsed ? 'none' : 'inline')};
  font-size: ${({ theme }) => theme.typography.subtitle1.fontSize};
  color: ${({ theme }) => theme.palette.text.primary};
  font-family: ${FontFamily.Tajawal};
  font-size: 36px;
  line-height: 72px;
`;

const MenuButton: React.FC<MenuButtonProps> = ({
  icon,
  label,
  variant = 'primary',
  isActive = false,
  isCollapsed,
  ...rest
}) => {
  const validatedVariant: ButtonVariant = isButtonVariant(variant)
    ? variant
    : 'primary';

  return (
    <StyledButton
      isCollapsed={isCollapsed}
      isActive={isActive}
      variant={validatedVariant}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...rest}
    >
      <IconWrapper isCollapsed={isCollapsed}>
        <img src={icon} alt={label} />
      </IconWrapper>
      <Label
        isCollapsed={isCollapsed}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: isCollapsed ? 0 : 1, x: isCollapsed ? -10 : 0 }}
        exit={{ opacity: 0, x: -10 }}
        transition={{ duration: 0.3 }}
      >
        {label}
      </Label>
    </StyledButton>
  );
};

export default MenuButton;
