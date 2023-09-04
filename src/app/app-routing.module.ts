import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './features/quiz/quiz.component';
import { AnswersComponent } from './features/routing/answers/answers.component';
import { HomeComponent } from './features/routing/home/home.component';
import { AuthGuard } from './services/auth.guards';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'answers', component: AnswersComponent, canActivate: [AuthGuard] },
  { path: 'quiz', component: QuizComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
