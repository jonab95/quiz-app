import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ScoreState, scoreFeatureKey } from './score.reducers';
//SCORE SELECTOR - gets data from store
export const getScore = createSelector(
  createFeatureSelector<ScoreState>(scoreFeatureKey),
  (state: ScoreState) => state.score
);

export const getUserScore = createSelector(getScore, (score: number) => score);
