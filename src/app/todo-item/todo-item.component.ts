import { Component, Input, OnInit } from '@angular/core';

import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  template: `
    <p>
      todo-item works!
    </p>
    {{ item.title }}
  `,
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() item!: TodoItem; //var tvungen att lägga till ! till item för att det skulle funka

  constructor() {

   }

  ngOnInit(): void {
  }

}
