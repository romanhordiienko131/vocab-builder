import { RootState } from '../store.ts';

export const selectUser = (state: RootState) => state.auth.user;

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;

export const selectIsRefreshing = (state: RootState) => state.auth.isRefreshing;
