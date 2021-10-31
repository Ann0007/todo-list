import { Component, Input, OnInit } from '@angular/core';

import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  template: `
    <div class="todo-item">
      {{ item.title }}
    </div>
  `,
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() item!: TodoItem; //var tvungen att lägga till ! efter item för att det skulle funka

  constructor() {

   }

  ngOnInit(): void {
  }

}
