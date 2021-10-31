import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `

    <input class="todo-input"
      #inputElementRef
      [value]="title"
      (keyup.enter)="submitValue($any($event.target).value)"
    >
    <button button class="btn"
      (click)="submitValue(inputElementRef.value)"
    >
      Save
    </button>
  `,
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {
  title = 'Hello World';

  constructor() { }

  @Output() submit: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

  //fick sätta new title "any" istället för "string". Note! Kunde ändra tillbaka till string efter rad 10 fick submitValue($any($event.target).value)
  submitValue(newTitle: string): void {
    this.submit.emit(newTitle);
  }
}

//Denna på rad 10, ($any($event.target).value) istället för (keyup.enter)="submitValue($event.target.value)"
