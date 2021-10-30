import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <p>
      input-button-unit works!
      The title is: {{ title }}
    </p>

    <input #inputElementRef
      [value]="title"
      (keyup.enter)="submitValue($event)">
    <button (click)="submitValue(inputElementRef.value)">
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
  //fick sätta new title any istället för string
  submitValue(newTitle: any): void {
    this.submit.emit(newTitle);
  }
}
