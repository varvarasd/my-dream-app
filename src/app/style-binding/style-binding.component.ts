import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  template: `

    <h1 [style.color]="titleStyle">Style binding example.</h1>

  `,
  styles: [`

    h1 {
      color: orange;
    }

    `]
})
export class StyleBindingComponent implements OnInit {

  titleStyle = 'red';

  constructor() { }

  ngOnInit() {
  }

}
