import { Action, createReducer, on } from '@ngrx/store';
import { UserActions } from './user.actions';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
//USER REDUCER - Reacts on actions, stores data in store
export const userFeatureKey = 'user';

export interface UserState extends EntityState<string> {
  username: string;
}

export const adapter: EntityAdapter<string> = createEntityAdapter<string>({
  selectId: (username: string) => 'username',
});

export const initialState: UserState = adapter.getInitialState({
  username: '',
});

const userReducer = createReducer(
  initialState,
  on(UserActions.loadUser, (state, { username }) => {
    return { ...state, username: username };
  })
);

export const userApplicationReducer = (state: UserState | undefined, action: Action) => {
  return userReducer(state, action);
};
