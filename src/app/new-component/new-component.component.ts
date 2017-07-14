import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-component',
  template: `
    <h1> This is a <code>html</code> template </h1>
    <h2> As a multi line example </h2>
  `,
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
