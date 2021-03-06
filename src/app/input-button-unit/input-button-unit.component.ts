import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-input-button-unit',
  template: `
    <p>
      input-button-unit works!
      The title is: {{ title }}
    </p>

    <input [value]="title"
           (keyup.enter)="changeTitle($event)">
    <button (click)="changeTitle('Button Clicked!')">
      Save
    </button>
  `,
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {
  title = 'Hello World';

  constructor() { }

  ngOnInit(): void {
  }
 //att sätta event.target.value i html input fungerade inte, gjorde denna lösning istället
  changeTitle(event: any) {
    this.title = event.target.value
    console.log(this.title)
  }
}
