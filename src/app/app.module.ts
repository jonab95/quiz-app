import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/routing/home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AboutComponent } from './features/about/about.component';
import { AnswersComponent } from './features/routing/answers/answers.component';
import { QuizComponent } from './features/quiz/quiz.component';
import { NavigationComponent } from './features/navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { StoreModule } from '@ngrx/store';
import {
  userApplicationReducer,
  userFeatureKey,
} from './+store/user/user.reducers';
import {
  quizApplicationReducer,
  quizFeatureKey,
} from './+store/quiz/quiz.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { EffectsModule } from '@ngrx/effects';
import { QuizAplicationEffects } from './+store/quiz/quiz.effects';
import { HttpClientModule } from '@angular/common/http';
import { QuizCardComponent } from './features/quiz-card/quiz-card.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { ScoreComponent } from './features/score/score.component';
import { scoreFeatureKey, scoreReducer } from './+store/score/score.reducers';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    AboutComponent,
    AnswersComponent,
    QuizComponent,
    QuizCardComponent,
    ScoreComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    MatFormFieldModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSnackBarModule,
    HttpClientModule,
    MatRadioModule,
    MatIconModule,
    MatTableModule,
    StoreModule.forRoot(userApplicationReducer),
    StoreModule.forRoot(quizApplicationReducer),
    StoreModule.forRoot(scoreReducer),
    EffectsModule.forRoot([QuizAplicationEffects]),
    StoreModule.forFeature(userFeatureKey, userApplicationReducer),
    StoreModule.forFeature(quizFeatureKey, quizApplicationReducer),
    StoreModule.forFeature(scoreFeatureKey, scoreReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
