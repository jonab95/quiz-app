import { Injectable } from '@angular/core';
import { createAction, props } from '@ngrx/store';
import { QuizApplication } from '../../entities/quiz';

//QUIZ ACTIONS
@Injectable()
export class QuizActions {
  static loadQuiz = createAction('[Quiz] load quiz');
  static loadQuizSuccess = createAction(
    '[Quiz] load quiz success',
    props<{ quiz: QuizApplication[] }>()
  );
}
