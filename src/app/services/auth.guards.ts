import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { QuizAppService } from './quiz-app.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private quizService: QuizAppService) {}

  canActivate(): boolean {
    let userName$ = this.quizService.username$;
    let canAccess = false;
    
    //Only users with username: admin123 can access this route ('Quiz Answers')
    userName$.subscribe((username: string) => {
      if (username === 'admin123') {
        canAccess = true;
      } else {
        canAccess = false;
      }
    });
    return canAccess;
  }
}
