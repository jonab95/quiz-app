import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState, userFeatureKey } from './user.reducers';
//USER SELECTOR - gets data from store
export const getUser = createSelector(
  createFeatureSelector<UserState>(userFeatureKey),
  (state: UserState) => state.username
);

export const getUsername = createSelector(
  getUser,
  (username: string) => username
);
