import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
   <h1>
      Welcome to {{ title }}!
  </h1>

  <app-input-button-unit></app-input-button-unit>
  `,
})
export class AppComponent {
  title = 'todo-list';
}
