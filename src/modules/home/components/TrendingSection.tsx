import React, { useEffect } from 'react';
import { useGetTrendingMoviesQuery } from '../api/home.api';
import MovieCard from './MovieCard';
import styled from 'styled-components';
import { Movie } from '@modules/home';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useAppSelector, useAppDispatch } from '@app/store/hook';
import {
  setFeaturedMovie,
  loadMoreMovies,
  setTrendingMovies,
  loadLastSeenMoviesFromStorage,
} from '@modules/home/store/home.slice';
import Spinner from '@components/common/Spinner';

const TrendingContainer = styled.div`
  display: flex;
  flex-grow: 1;
  min-width: 200px;
  gap: 15px;
  height: auto;
  max-height: 100%;
  overflow-x: scroll;
  white-space: nowrap;
`;

const TrendingSection: React.FC = () => {
  const dispatch = useAppDispatch();

  const featuredMovieId = useAppSelector(
    (state) => state.home.featuredMovie?.Id
  );
  const currentItems = useAppSelector((state) => state.home.currentItems);

  const {
    data: trendingMovies,
    isLoading,
    error,
  } = useGetTrendingMoviesQuery();

  useEffect(() => {
    if (trendingMovies) {
      dispatch(loadLastSeenMoviesFromStorage());
      dispatch(setTrendingMovies(trendingMovies));
    }
  }, [trendingMovies, dispatch]);

  const loadMore = () => {
    dispatch(loadMoreMovies());
  };

  const handleSetFeaturedMovie = (movie: Movie) => {
    dispatch(setFeaturedMovie(movie));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong!</div>;
  }

  return (
    <InfiniteScroll
      dataLength={currentItems.length}
      next={loadMore}
      hasMore={currentItems.length < (trendingMovies?.length || 0)}
      loader={currentItems.length > 0 ? <Spinner /> : null}
      scrollableTarget="scrollableTrendingContainer"
      style={{ display: 'flex', height: '300px', overflow: 'auto' }}
      scrollThreshold={0.9}
    >
      <TrendingContainer id="scrollableTrendingContainer">
        {currentItems.map((movie) => (
          <MovieCard
            key={movie.Id}
            coverImage={movie.CoverImage}
            title={movie.Title}
            onClick={() => handleSetFeaturedMovie(movie)}
            isActive={featuredMovieId === movie.Id}
          />
        ))}
      </TrendingContainer>
    </InfiniteScroll>
  );
};

export default TrendingSection;
