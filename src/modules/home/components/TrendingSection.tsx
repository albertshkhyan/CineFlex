import React from 'react';
import { useGetTrendingMoviesQuery } from '../api/home.api';
import MovieCard from './MovieCard';
import styled from 'styled-components';
import { useFeaturedMovie } from '../hooks/useFeaturedMovie';
import { Movie } from '@modules/home';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useAppSelector } from '@app/store/hook';
import { useAppDispatch } from '@app/store';
import { setFeaturedMovie } from '@modules/home/store/home.slice';

const TrendingContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const TrendingSection: React.FC = () => {
  const dispatch = useAppDispatch();

  const featuredMovieId = useAppSelector(
    (state) => state.home.featuredMovie?.Id
  );

  const {
    data: trendingMovies,
    isLoading,
    error,
  } = useGetTrendingMoviesQuery();

  // const { setFeaturedMovie } = useFeaturedMovie();
  // State to manage the displayed movies
  const [currentItems, setCurrentItems] = React.useState<Movie[]>([]);
  const [itemsToShow, setItemsToShow] = React.useState(8);

  React.useEffect(() => {
    if (trendingMovies) {
      setCurrentItems(trendingMovies.slice(0, itemsToShow));
    }
  }, [trendingMovies, itemsToShow]);

  // Load more items
  const loadMore = () => {
    setItemsToShow((prevCount) => prevCount + 8);
  };

  const handleSetFeaturedMovie = (movie: Movie) => {
    dispatch(setFeaturedMovie(movie));
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong!</div>;

  return (
    <InfiniteScroll
      dataLength={currentItems.length}
      next={loadMore}
      hasMore={currentItems.length < (trendingMovies?.length || 0)}
      loader={<div>Loading more items...</div>}
      scrollableTarget="scrollableTrendingContainer"
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
