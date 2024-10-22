import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HomeData, Movie } from '../types/home.types';

const BASE_URL = '/';

export const homeApi = createApi({
  reducerPath: 'homeApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getFeaturedMovie: builder.query<Movie, void>({
      query: () => 'mockData.json',
      transformResponse: (response: HomeData) => {
        return response.Featured;
      },
    }),
    getTrendingMovies: builder.query<Movie[], void>({
      query: () => 'mockData.json',
      transformResponse: (response: HomeData) => {
        console.log('dsafsfs3 response: ', response);
        return response.TrendingNow;
      },
    }),
  }),
});

export const {
  useLazyGetFeaturedMovieQuery,
  useGetTrendingMoviesQuery,
  useLazyGetTrendingMoviesQuery,
} = homeApi;
