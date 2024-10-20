import { combineReducers } from '@reduxjs/toolkit';
import { authSlice, authApi } from '@modules/auth';
import { sidebarSlice } from '@modules/menu';
import { homeApi } from '@modules/home';
import homeSlice from '@modules/home/store/home.slice';
// import {featuredVideoApi} from '@modules/featuredVideo';
// import {menuApi} from '@modules/menu';
// import {trendingApi} from '@modules/trending';
// import {userApi from '@modules/user';

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  sidebar: sidebarSlice.reducer,
  home: homeSlice,
  [authApi.reducerPath]: authApi.reducer,
  [homeApi.reducerPath]: homeApi.reducer,
  // [featuredVideoApi.reducerPath]: featuredVideoApi.reducer,
  // [menuApi.reducerPath]: menuApi.reducer,
  // [trendingApi.reducerPath]: trendingApi.reducer,
  // [userApi.reducerPath]: userApi.reducer,
});

export default rootReducer;
