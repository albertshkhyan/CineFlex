import React from 'react';
import styled from 'styled-components';
import Modal from '@components/common/Modal';
import { Movie } from '@modules/home';

const InfoModal: React.FC<{ movie: Movie; onClose: () => void }> = ({
  movie,
  onClose,
}) => {
  return (
    <Modal onClose={onClose}>
      <ModalContent>
        <Title>{movie.Title}</Title>
        <Details>
          <span>{movie.ReleaseYear}</span>
          <span>{movie.MpaRating}</span>
          <span>
            {Math.floor(Number(movie.Duration) / 60)}h{' '}
            {Number(movie.Duration) % 60}m
          </span>
        </Details>
        <Description>{movie.Description}</Description>
        <Actors>Actors info here...</Actors>
      </ModalContent>
    </Modal>
  );
};

const ModalContent = styled.div`
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  margin: auto;
  background-color: black;
`;

const Details = styled.div`
  display: flex;
  gap: 10px;
  font-size: 14px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 16px;
`;

const Actors = styled.p`
  font-size: 14px;
`;

export default InfoModal;
