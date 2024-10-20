import { useMemo } from 'react';
import { useGetTrendingMoviesQuery } from '../api/home.api';
import { Movie } from '../types/home.types';
import useSessionStorage from '@app/hooks/useSessionStorage';

const sortMoviesByLastSeen = (
  movies: Movie[],
  lastSeenId: string | null
): Movie[] => {
  if (!lastSeenId) return movies;

  const lastSeenIndex = movies.findIndex((movie) => movie.Id === lastSeenId);
  if (lastSeenIndex === -1) return movies;

  const [lastSeenMovie] = movies.splice(lastSeenIndex, 1);
  return [lastSeenMovie, ...movies];
};

export const useTrendingMovies = () => {
  const [lastSeenId, setLastSeenId] = useSessionStorage<string | null>(
    'lastSeenMovieId',
    null
  );

  const {
    data: trendingMovies,
    isLoading,
    error,
  } = useGetTrendingMoviesQuery();

  console.log('trendingMovies: ', trendingMovies);

  const sortedTrendingMovies = useMemo(() => {
    if (!trendingMovies) return [];
    const sortedMovies = sortMoviesByLastSeen(trendingMovies, lastSeenId);
    return sortedMovies.slice(0, 50);
  }, [trendingMovies, lastSeenId]);

  const updateLastSeen = (movieId: string) => {
    setLastSeenId(movieId);
  };

  return {
    data: sortedTrendingMovies,
    isLoading,
    error,
    updateLastSeen,
  };
};
