import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `
    <h1> Property Binding </h1>

    <img src="{{ angularLogo }}">
    <img [src]="angularLogo">
    <img bind-src="angularLogo">

    <h1> Boolean property binding. The disable attribute </h1>

    <button [disabled]="buttonStatus">My button</button>

  `,
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  angularLogo = 'https://varvarasd.github.io/fcc-challenge2/asset/image/4.jpg';
  buttonStatus = true;

  constructor() { }

  ngOnInit() {
  }

}
