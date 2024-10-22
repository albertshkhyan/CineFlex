import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '@modules/home';

interface HomeState {
  trendingMovies: Movie[];
  currentItems: Movie[];
  itemsToShow: number;
  featuredMovie: Movie | null;
  lastSeenMovies: Movie[];
}

const initialState: HomeState = {
  trendingMovies: [],
  currentItems: [],
  itemsToShow: 8,
  featuredMovie: null,
  lastSeenMovies: [],
};

const defaultFeaturedMovie: Movie = {
  Id: '1',
  Title: 'The Irishman',
  CoverImage: '/src/assets/images/small/the_irishman.small.jpg',
  TitleImage: '/src/assets/images/large/the_irishman.large.jpg',
  Date: '2021-10-24T12:16:50.894556',
  ReleaseYear: '2021',
  MpaRating: '18+',
  Category: 'Movie',
  Duration: '6000',
  VideoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
  Description: 'Info About it',
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setTrendingMovies(state, action: PayloadAction<Movie[]>) {
      state.trendingMovies = action.payload;

      const sortedMovies = [
        ...state.lastSeenMovies,
        ...action.payload.filter(
          (movie) => !state.lastSeenMovies.find((seen) => seen.Id === movie.Id)
        ),
      ];

      state.currentItems = sortedMovies.slice(0, state.itemsToShow);
    },
    loadMoreMovies(state) {
      const newItems = state.trendingMovies.slice(
        state.itemsToShow,
        state.itemsToShow + 8
      );
      state.currentItems = [...state.currentItems, ...newItems];
      state.itemsToShow += 8;
      console.log('Updated itemsToShow:', state.itemsToShow);
      console.log('Updated currentItems:', state.currentItems);
    },
    setFeaturedMovie(state, action: PayloadAction<Movie>) {
      state.featuredMovie = action.payload;

      const movieExists = state.lastSeenMovies.some(
        (movie) => movie.Id === action.payload.Id
      );

      if (!movieExists) {
        state.lastSeenMovies = [
          action.payload,
          ...state.lastSeenMovies.slice(0, 9),
        ];

        sessionStorage.setItem(
          'lastSeenMovies',
          JSON.stringify(state.lastSeenMovies)
        );
      }

      sessionStorage.setItem('featuredMovie', JSON.stringify(action.payload));
    },
    clearMovieState(state) {
      state.trendingMovies = initialState.trendingMovies;
      state.currentItems = initialState.currentItems;
      state.itemsToShow = initialState.itemsToShow;
      state.featuredMovie = initialState.featuredMovie;
      state.lastSeenMovies = [];

      sessionStorage.removeItem('lastSeenMovies');
      sessionStorage.removeItem('featuredMovie');
    },

    loadLastSeenMoviesFromStorage(state) {
      const lastSeenMovies = sessionStorage.getItem('lastSeenMovies');
      if (lastSeenMovies) {
        state.lastSeenMovies = JSON.parse(lastSeenMovies);
      }

      // If no last seen movies are found, set "The Irishman" as the default featured movie
      if (!state.lastSeenMovies.length) {
        state.featuredMovie = defaultFeaturedMovie;
      } else {
        // If there are last seen movies, set the latest one as the featured movie
        state.featuredMovie = state.lastSeenMovies[0];
      }
    },
  },
});

export const {
  setFeaturedMovie,
  loadMoreMovies,
  setTrendingMovies,
  clearMovieState,
  loadLastSeenMoviesFromStorage,
} = homeSlice.actions;
export default homeSlice.reducer;
