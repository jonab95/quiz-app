import { Component } from '@angular/core';
import { QuizAppService } from './services/quiz-app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public quizAppService: QuizAppService) {}
}
