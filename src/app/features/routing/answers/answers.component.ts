import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { QuizAppService } from '../../../services/quiz-app.service'

@Component({
  selector: 'answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.scss'],
})
export class AnswersComponent implements OnInit, AfterViewInit {
  columns = ['question', 'answer'];
  dataSource: any;

  data: { question: string; answer: string }[] = [];

  constructor(public quizAppService: QuizAppService) {}

  ngAfterViewInit(): void {
    //table expects MatTableDataSource object
    this.dataSource = new MatTableDataSource<{
      question: string;
      answer: string;
    }>(this.data);
  }

  ngOnInit(): void {
    this.mapData();
  }
  //Data should be reconstructed into format : [question: string, answer: string]
  mapData() {
    this.quizAppService.quizApplicationData$.subscribe((quizData) => {
      quizData.forEach((data) => {
        this.data.push({
          question: data.question.text,
          answer: data.correctAnswer,
        });
      });
    });
  }
}
