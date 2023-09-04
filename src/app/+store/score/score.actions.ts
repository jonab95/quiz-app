import { Injectable } from '@angular/core';
import { createAction, props } from '@ngrx/store';

//SCORE ACTIONS - increment score
@Injectable()
export class ScoreActions {
  static increment = createAction('[Score] Increment');
}
