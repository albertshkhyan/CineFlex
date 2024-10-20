import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Colors } from '@app/types/theme/colors.types';
import { FontFamily } from '@app/types/theme/font.types';
import IconButton from '@components/common/IconButton';
import Button from '@components/common/Button';
import { useAppSelector } from '@app/store/hook';
import { useAppDispatch } from '@app/store';
import { useGetFeaturedMovieQuery } from '@modules/home';
import { setFeaturedMovie } from '@modules/home/store/home.slice';

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
  background-image: url('/src/assets/images/texture_paper.jpg');
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

const FeaturedSection: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data: fetchedMovie, isLoading, error } = useGetFeaturedMovieQuery();
  // const { data: featuredMovie, isLoading, error } = useGetFeaturedMovieQuery();
  const featuredMovie = useAppSelector((state) => state.home.featuredMovie);

  const playButtonIcon = '/src/assets/icons/play-xxl.png';

  useEffect(() => {
    if (fetchedMovie) {
      dispatch(setFeaturedMovie(fetchedMovie));
    }
  }, [fetchedMovie, dispatch]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong!</div>;

  return (
    <Section>
      {featuredMovie && (
        <FeaturedImage imageUrl={featuredMovie.CoverImage}>
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
                icon={<PlayButtonIcon src={playButtonIcon} alt="Play" />}
                label="Play"
              />
              <InfoButton variant="primary">More Info</InfoButton>
            </ButtonContainer>
          </Content>
        </FeaturedImage>
      )}
    </Section>
  );
};

export default FeaturedSection;
