import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getQuizApplicationData } from '../+store/quiz/quiz.selectors';
import { getUserScore } from '../+store/score/score.selectors';
import { getUsername } from '../+store/user/user.selectors';

//An interface where data can be accessed from selectors
@Injectable({
  providedIn: 'root',
})
export class QuizAppService {
  username$ = this.store.pipe(select(getUsername));
  quizApplicationData$ = this.store.pipe(select(getQuizApplicationData));
  score$ = this.store.pipe(select(getUserScore));

  constructor(private store: Store) {}
}
