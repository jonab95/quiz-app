import { createFeatureSelector, createSelector } from '@ngrx/store';
import { QuizApplication } from '../../entities/quiz';
import { QuizState, quizFeatureKey } from './quiz.reducers';
//QUIZ SELECTOR - gets data from store
export const getQuizApplication = createSelector(
  createFeatureSelector<QuizState>(quizFeatureKey),
  (state: QuizState) => state.quizApplication
);

export const getQuizApplicationData = createSelector(
  getQuizApplication,
  (quizApplication: QuizApplication[]) => quizApplication
);
