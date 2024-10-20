import { createSlice } from '@reduxjs/toolkit';
import { Movie } from '@modules/home';

interface HomeState {
  featuredMovie: Movie | null;
}

const initialState: HomeState = {
  featuredMovie: null,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setFeaturedMovie(state, action) {
      state.featuredMovie = action.payload;
    },
  },
});

export const { setFeaturedMovie } = homeSlice.actions;
export default homeSlice.reducer;
