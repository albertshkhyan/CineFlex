import { useState, useEffect, useCallback } from 'react';
import { Movie } from '../types/home.types';
import { useGetFeaturedMovieQuery } from '../api/home.api';
import useSessionStorage from '@app/hooks/useSessionStorage';

const FEATURED_MOVIE_KEY = 'featuredMovie';

export const useFeaturedMovie = () => {
  const [featuredMovie, setFeaturedMovie] = useState<Movie | null>(null);
  const [storedFeaturedMovieId, setStoredFeaturedMovieId] = useSessionStorage<
    string | null
  >(FEATURED_MOVIE_KEY, null);

  console.log('dsfasdf2 storedFeaturedMovieId: ', storedFeaturedMovieId);

  const {
    data: apiFeaturedMovie,
    isLoading,
    error,
  } = useGetFeaturedMovieQuery();

  // useEffect(() => {
  //   if (apiFeaturedMovie) {
  //     debugger;
  //     // If we have a stored movie ID and it matches the API result, set it as the featured movie
  //     if (
  //       storedFeaturedMovieId &&
  //       apiFeaturedMovie.Id === storedFeaturedMovieId
  //     ) {
  //       setFeaturedMovie(apiFeaturedMovie);
  //     } else {
  //       // Otherwise, set the API result as the featured movie
  //       setFeaturedMovie(apiFeaturedMovie);
  //     }
  //   }
  // }, [storedFeaturedMovieId, apiFeaturedMovie]);

  const updateFeaturedMovie = useCallback(
    (movie: Movie) => {
      // debugger;
      setFeaturedMovie(movie);
      setStoredFeaturedMovieId(movie.Id);

      setTimeout(() => {
        console.log('Playing video in the background for movie:', movie.Title);
      }, 2000);
    },
    [setStoredFeaturedMovieId]
  );

  return {
    featuredMovie,
    isLoading,
    error,
    setFeaturedMovie: updateFeaturedMovie,
    featuredMovieId: storedFeaturedMovieId,
  };
};
