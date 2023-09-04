import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { QuizApplication } from '../entities/quiz';
import { HttpClient } from '@angular/common/http';
//Get data thorugh API - 10 random objects
@Injectable({
  providedIn: 'root',
})
export class QuizApplicationService {
  constructor(private http: HttpClient) {}

  getQuizApplicationData(): Observable<QuizApplication[]> {
    const url = 'https://the-trivia-api.com/v2/questions';
    return this.http.get<QuizApplication[]>(url);
  }
}
