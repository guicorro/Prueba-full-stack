import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  constructor(private router: Router) {

  }

  goToNews() {
    this.router.navigate(['/news']);
  }

  goToArchived() {
    this.router.navigate(['/archived']);

  }
}
