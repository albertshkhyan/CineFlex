import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Colors } from '@app/types/theme/colors.types';
import { FontFamily } from '@app/types/theme/font.types';
import IconButton from '@components/common/IconButton';
import Button from '@components/common/Button';
import { useAppSelector } from '@app/store/hook';
import { useAppDispatch } from '@app/store';
import {
  loadLastSeenMoviesFromStorage,
  setFeaturedMovie,
} from '@modules/home/store/home.slice';
import playXxl from '@assets/icons/play-xxl.png';
import InfoModal from '@modules/home/components/InfoModal';

const FeaturedSection: React.FC = () => {
  const dispatch = useAppDispatch();
  const featuredMovie = useAppSelector((state) => state.home.featuredMovie);

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

  useEffect(() => {
    dispatch(loadLastSeenMoviesFromStorage());

    const lastSeenMoviesFromStorage = JSON.parse(
      sessionStorage.getItem('lastSeenMovies') || '[]'
    );
    if (lastSeenMoviesFromStorage.length > 0) {
      dispatch(setFeaturedMovie(lastSeenMoviesFromStorage[0]));
    }
  }, [dispatch]);

  useEffect(() => {
    if (featuredMovie && featuredMovie.VideoUrl) {
      setTimeout(() => {
        setIsVideoPlaying(true);
      }, 2000);
    }
  }, [featuredMovie]);

  const handlePlayButtonClick = () => {
    setIsVideoPlaying(true);
  };

  const handleMoreInfoClick = () => {
    setIsInfoModalOpen(true);
  };

  const handleModalClose = () => {
    setIsInfoModalOpen(false);
  };

  return (
    <>
      <Section>
        {featuredMovie && (
          <>
            {!isVideoPlaying ? (
              <FeaturedImage imageUrl={featuredMovie.TitleImage}>
                <Overlay />
                <OverlayGradient />
                <Content>
                  <Label>Movie</Label>
                  <Title>{featuredMovie.Title}</Title>
                  <Details>
                    <span>{featuredMovie.ReleaseYear}</span>
                    <span>{featuredMovie.MpaRating}</span>
                    <span>
                      {Math.floor(Number(featuredMovie.Duration) / 60)}h{' '}
                      {Number(featuredMovie.Duration) % 60}m
                    </span>
                  </Details>
                  <Description>{featuredMovie.Description}</Description>
                  <ButtonContainer>
                    <PlayButton
                      variant="secondary"
                      icon={<PlayButtonIcon src={playXxl} alt="Play" />}
                      onClick={handlePlayButtonClick}
                      label="Play"
                    />
                    <InfoButton variant="primary" onClick={handleMoreInfoClick}>
                      More Info
                    </InfoButton>
                  </ButtonContainer>
                </Content>
              </FeaturedImage>
            ) : (
              <BackgroundVideo autoPlay muted loop>
                <source src={featuredMovie.VideoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </BackgroundVideo>
            )}
          </>
        )}
      </Section>

      {isInfoModalOpen && featuredMovie && (
        <InfoModal movie={featuredMovie} onClose={handleModalClose} />
      )}
    </>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: ${Colors.black};
  border-bottom: 1px solid ${Colors.secondaryMain};
  height: calc(100vh - 336px);
`;

const FeaturedImage = styled.div<{ imageUrl: string }>`
  width: 100%;
  height: 100%;
  background: url(${({ imageUrl }) => imageUrl}) no-repeat center center;
  background-size: cover;
  border-radius: 12px;
  position: relative;
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  z-index: 5;
`;

const OverlayGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.9), transparent);
  z-index: 6;
`;

const Content = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: ${Colors.white};
  max-width: 60%;
  margin-bottom: 154px;
  z-index: 7;
`;

const Label = styled.span`
  color: ${Colors.gray};
  font-family: ${FontFamily.Garamond};
  font-size: 36px;
  letter-spacing: 2px;
  text-transform: uppercase;
  display: block;
  margin-bottom: 8px;
`;

const Title = styled.h2`
  font-weight: bold;
  margin: 0 0 10px;
  font-family: ${FontFamily.Garamond};
  text-transform: uppercase;
  font-size: 108px;
  background-image: url('/assets/images/texture_paper.jpg');
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.5;
  margin: 15px 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

const PlayButtonIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const PlayButton = styled(IconButton)`
  background-color: ${Colors.white};
  color: ${Colors.black};
  padding: 0 20px;
  height: 72px;
  border-radius: 40px;
  min-width: 240px;
  font-weight: bold;

  span {
    font-size: 32px;
  }
`;

const InfoButton = styled(Button)`
  background-color: ${Colors.primaryMain};
  color: ${Colors.white};
  padding: 0 20px;
  height: 72px;
  border-radius: 40px;
  min-width: 240px;
  font-weight: bold;
  font-size: 32px;
`;

export default FeaturedSection;
