import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  @Input()
  username: string | null | undefined = '';

  constructor(private matDialog: MatDialog) {}

  openDialog() {
    this.matDialog.open(AboutComponent);
  }
}
