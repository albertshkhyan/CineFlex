import React from 'react';
import styled, { keyframes } from 'styled-components';

interface SpinnerProps {
  size?: number;
  color?: string;
}

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerWrapper = styled.div<{ size: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;

  svg {
    animation: ${rotate} 1s linear infinite;
    width: 100%;
    height: 100%;
  }
`;

const Spinner: React.FC<SpinnerProps> = ({ size = 40, color = '#09f' }) => {
  return (
    <SpinnerWrapper size={size}>
      <svg viewBox="0 0 50 50">
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="31.4 31.4"
        />
      </svg>
    </SpinnerWrapper>
  );
};

export default Spinner;
