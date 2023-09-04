import { Injectable } from '@angular/core';
import { createAction, props } from '@ngrx/store';
//USER ACTIONS
@Injectable()
export class UserActions {
  static loadUser = createAction(
    '[User] load user',
    props<{ username: string }>()
  );
}
