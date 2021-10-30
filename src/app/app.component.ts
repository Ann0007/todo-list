import { Component } from '@angular/core';

import { TodoItem } from './interfaces/todo-item';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
   <h1>
      Welcome to {{ title }}!
  </h1>

  <app-input-button-unit (submit)="addItem($event)"></app-input-button-unit>

  <ul>
    <li *ngFor="let todoItem of todoList">
      {{ todoItem.title }}
      <app-todo-item [item]="todoItem"></app-todo-item>
    </li>
  </ul>
  `,
})
export class AppComponent {
  addItem(title: string) {
    this.todoList.push({ title });
  }

  title = 'todo-list';
  todoList: TodoItem[] = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];
}
