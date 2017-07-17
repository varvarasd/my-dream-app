import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css-styles',
  template: `

  <h1>Inline css within the component decorator.

  `,
  styles: [`
    h1 {
      color: green;
    }

    `]
})
export class CssStylesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
