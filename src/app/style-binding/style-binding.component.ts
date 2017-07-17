import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  template: `

    <h1 [style.color]="titleStyle ? 'green' : 'pink'">Style binding example.</h1>

  `,
  styles: [`

    h1 {
      color: orange;
    }

    `]
})
export class StyleBindingComponent implements OnInit {

  titleStyle = false;

  constructor() { }

  ngOnInit() {
  }

}
