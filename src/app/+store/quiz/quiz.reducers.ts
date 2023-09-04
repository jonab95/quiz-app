import { Action, createReducer, on } from '@ngrx/store';
import { QuizActions } from './quiz.actions';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { QuizApplication } from 'src/app/entities/quiz';

//QUIZ REDUCER - Reacts on actions, stores data in store

export const quizFeatureKey = 'quiz-application';

export interface QuizState extends EntityState<QuizApplication> {
  quizApplication: QuizApplication[];
}

export const adapter: EntityAdapter<QuizApplication> =
  createEntityAdapter<QuizApplication>({
    selectId: (quizApplication: QuizApplication) => quizApplication.question,
  });

export const initialState: QuizState = adapter.getInitialState({
  quizApplication:[],
});

const quizReducer = createReducer(
  initialState,
  on(QuizActions.loadQuiz, (state ) => {
    return { ...state };
  }),
  on(QuizActions.loadQuizSuccess, (state, { quiz }) => {
    return { ...state, quizApplication: quiz };
  })
);

export const quizApplicationReducer = (state: QuizState | undefined, action: Action) => {
  return quizReducer(state, action);
};
