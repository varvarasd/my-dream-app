import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <h1> Event binding </h1>

    <button (mouseenter)="myEvent($event)">My Event Button</button>
  `,
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  myEvent($event) {
    console.log(event);
  }

  constructor() { }

  ngOnInit() {
  }

}
