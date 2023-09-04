import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QuizAppService } from '../../services/quiz-app.service';

@Component({
  selector: 'score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
})
export class ScoreComponent {
  constructor(
    public quizAppService: QuizAppService,
    public dialog: MatDialog
  ) {}
}
