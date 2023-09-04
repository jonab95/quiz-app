import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { QuizActions } from '../../+store/quiz/quiz.actions';
import { ScoreComponent } from '../score/score.component';
import { QuizAppService } from '../../services/quiz-app.service';
import { ScoreActions } from '../../+store/score/score.actions';

@Component({
  selector: 'quiz-game',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent {
  constructor(
    public quizAppService: QuizAppService,
    private store: Store,
    public dialog: MatDialog
  ) {
    this.store.dispatch(QuizActions.loadQuiz());
  }

  getData() {
    return this.quizAppService.quizApplicationData$;
  }

  increment(): void {
    this.store.dispatch(ScoreActions.increment());
  }

  checkScore() {
    this.dialog.open(ScoreComponent);
  }
}
