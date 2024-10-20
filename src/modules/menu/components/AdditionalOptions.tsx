import React from 'react';
import styled from 'styled-components';
import { buttonStyles } from '@app/theme/components';

interface AdditionalOptionsProps {
  isCollapsed?: boolean;
}

const OptionsContainer = styled.div<{ isCollapsed?: boolean }>`
  padding-left: 24px;
  display: flex;
  flex-direction: column;
  align-items: ${({ isCollapsed }) => (isCollapsed ? 'center' : 'flex-start')};
  transition:
    padding 0.3s ease,
    align-items 0.3s ease;
  margin-bottom: 60px;
`;

export const OptionButton = styled.button<{ isCollapsed?: boolean }>`
  ${buttonStyles.base};
  font-family: ${({ theme }) => theme.typography.button.fontFamily};
  font-size: ${({ theme }) => theme.typography.button.fontSize};
  font-weight: ${({ theme }) => theme.typography.button.fontWeight};
  line-height: ${({ theme }) => theme.typography.button.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.button.letterSpacing};
  color: ${({ theme }) => theme.palette.text.secondary};
  text-transform: uppercase;
  background: none;
  border: none;
  width: 100%;
  text-align: ${({ isCollapsed }) => (isCollapsed ? 'center' : 'left')};
  transition:
    padding 0.3s ease,
    text-align 0.3s ease;
  display: ${({ isCollapsed }) => (isCollapsed ? 'none' : 'block')};
  padding: 0;
`;

const AdditionalOptions: React.FC<AdditionalOptionsProps> = ({
  isCollapsed,
}) => {
  const handleLanguageClick = () => {
    console.log('Language option clicked');
  };

  const handleHelpClick = () => {
    console.log('Get Help option clicked');
  };

  const handleExitClick = () => {
    console.log('Exit option clicked');
  };

  return (
    <OptionsContainer isCollapsed={isCollapsed}>
      <OptionButton isCollapsed={isCollapsed} onClick={handleLanguageClick}>
        Language
      </OptionButton>
      <OptionButton isCollapsed={isCollapsed} onClick={handleHelpClick}>
        Get Help
      </OptionButton>
      <OptionButton isCollapsed={isCollapsed} onClick={handleExitClick}>
        Exit
      </OptionButton>
    </OptionsContainer>
  );
};

export default AdditionalOptions;
