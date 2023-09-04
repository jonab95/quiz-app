import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserActions } from '../../../+store/user/user.actions';
import * as fromReducer from '../../../+store/user/user.reducers';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      this.usernameValidator,
    ]),
  });

  constructor(
    private router: Router,
    private store: Store<fromReducer.UserState>
  ) {}

  //validates username, it should not start with a number, also the username is required
  usernameValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    if (control.value.match(/^\d/)) {
      return { username: true };
    }
    return null;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.store.dispatch(
        UserActions.loadUser({
          username: this.loginForm.value.username,
        })
      );
      this.router.navigate(['/quiz']);
    }
  }
}
