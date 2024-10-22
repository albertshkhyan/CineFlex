import React from 'react';
import styled from 'styled-components';
import { Colors } from '@app/types/theme/colors.types';

interface MovieCardProps {
  coverImage: string;
  title: string;
  onClick: () => void;
  isActive: boolean;
}

const CardContainer = styled.div<{ isActive: boolean }>`
  flex: 0 0 200px;
  height: 296px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border-radius: 8px;
  border: ${({ isActive }) =>
    isActive ? `2px solid ${Colors.primaryMain}` : 'none'};
  box-shadow: ${({ isActive }) =>
    isActive ? `0 0 15px ${Colors.primaryMain}` : 'none'};
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    border 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const CoverImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;

const MovieCard: React.FC<MovieCardProps> = ({
  coverImage,
  title,
  onClick,
  isActive,
}) => {
  return (
    <CardContainer isActive={isActive} onClick={onClick}>
      <CoverImage src={coverImage} alt={title} />
    </CardContainer>
  );
};

export default MovieCard;
