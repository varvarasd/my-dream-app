import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  template: `

    <h1 [ngStyle]="titleStyles">Multi style binding example.</h1>

  `,
  styles: [`

    h1 {
      color: orange;
    }

    `]
})
export class StyleBindingComponent implements OnInit {

  titleStyles = {
    'color' : 'red',
    'font-size' : '4em'
  }

  constructor() { }

  ngOnInit() {
  }

}
