import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
   <h1 class="app-title">
      Welcome to {{ title }}!
  </h1>

  <app-list-manager></app-list-manager>
  `,
})
export class AppComponent {
  title = 'My to do list APP';
}
