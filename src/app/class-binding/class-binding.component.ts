import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  template: `

    <h1 [class]="classBinding">Class binding <span [class.green-example]="greenExample">example.</span></h1>

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

    `]
})
export class ClassBindingComponent implements OnInit {

  classBinding = 'red-title';
  greenExample = 'green-example';

  constructor() { }

  ngOnInit() {
  }

}
