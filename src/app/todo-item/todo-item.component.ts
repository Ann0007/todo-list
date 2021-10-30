import { Component, Input, OnInit } from '@angular/core';

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
  @Input() item: any; //var tvungen att lägga till :any till item

  constructor() { }

  ngOnInit(): void {
  }

}
