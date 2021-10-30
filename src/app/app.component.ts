import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
   <h1>
      Welcome to {{ title }}!
  </h1>

  <app-input-button-unit></app-input-button-unit>

  <ul>
    <li *ngFor="let todoItem of todoList">
      {{ todoItem.title }}
      <app-todo-item [item]="todoItem"></app-todo-item>
    </li>
  </ul>
  `,
})
export class AppComponent {
  title = 'todo-list';
  todoList = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];
}
