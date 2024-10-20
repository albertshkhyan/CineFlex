// /menu/store/sidebar.slice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SidebarState {
  isCollapsed: boolean;
}

const initialState: SidebarState = {
  isCollapsed: true,
};

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setCollapsed(state, action: PayloadAction<boolean>) {
      state.isCollapsed = action.payload;
    },
    toggleCollapsed(state) {
      state.isCollapsed = !state.isCollapsed;
    },
  },
});

export const { setCollapsed, toggleCollapsed } = sidebarSlice.actions;
export default sidebarSlice.reducer;
