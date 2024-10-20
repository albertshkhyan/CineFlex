import { createAction } from '@reduxjs/toolkit';

export const setTokens = createAction<{
  accessToken: string;
  refreshToken: string;
}>('auth/setTokens');
export const clear = createAction('auth/clear');
