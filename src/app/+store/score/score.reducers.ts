import { Action, createReducer, on } from '@ngrx/store';
import { ScoreActions } from './score.actions';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
//SCORE REDUCER - Reacts on actions, stores data in store
export const scoreFeatureKey = 'score';

export interface ScoreState extends EntityState<number> {
  score: number;
}

export const adapter: EntityAdapter<number> = createEntityAdapter<number>({
  selectId: (score: number) => 'score',
});

export const initialState: ScoreState = adapter.getInitialState({
  score: 0,
});

const userScoreReducer = createReducer(
  initialState,
  on(ScoreActions.increment, state => ({ ...state, score: state.score + 1 })),
);

export const scoreReducer = (state: ScoreState | undefined, action: Action) => {
  return userScoreReducer(state, action);
};
