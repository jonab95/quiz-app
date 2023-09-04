import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { QuizApplicationService } from '../../application/quiz-application.data.service';
import { QuizActions } from './quiz.actions';
import { switchMap, map } from 'rxjs';
//QUIZ EFFECT - Gets the data and stores it in redux store, on action success
@Injectable({
  providedIn: 'root',
})
export class QuizAplicationEffects {
  constructor(
    private actions$: Actions,
    private service: QuizApplicationService
  ) {}

  loadQuizApplication$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(QuizActions.loadQuiz),
      switchMap(() => {
        return this.service
          .getQuizApplicationData()
          .pipe(map((quiz) => QuizActions.loadQuizSuccess({ quiz: quiz })));
      })
    );
  });
}
