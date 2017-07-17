import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  template: `

    <h1 [class]="classBinding">Class binding <span [class.green-example]="greenExample">example.</span></h1>
    <h2 [ngClass]="moreClasses">Multi class binding with ngClass directive.</h2>
  `,
  styles: [`

    h1 {
      text-decoration: underline;
    }

    .red-title {
      color: red;
    }

    .green-example {
      color: green;
    }

    .underline-class1 {
      text-decoration: underline;
    }

    .large-class2 {
      font-size: 5em;
    }

    .blue-class3 {
      color: blue;
    }

    `]
})
export class ClassBindingComponent implements OnInit {

  classBinding = 'red-title';
  greenExample = 'green-example';
  moreClasses = {
    'underline-class1': true,
    'large-class2': true,
    'blue-class3': true
  }

  constructor() { }

  ngOnInit() {
  }

}
