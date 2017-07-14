import { Component } from '@angular/core';

@Component({
  selector: 'app-new-component',
  template: `
    <h1> This </h1>
    <h2> Is a multi line <code>html</code> template </h2>
    <h2> Which tells us that {{ myObject.name }} is {{ myObject.age }} years old and lives in {{ myObject.location }} </h2>
    <h2> {{ myObject.name }} likes: </h2>
    <ul>
      <li *ngFor="let arrItem of myArr"> {{ arrItem }} </li>
    </ul>
    <p *ngIf="myArr ; else otherTmpl"> {{myObject.name}} confirms the list!</p>
    <ng-template #otherTmpl> {{myObject.name}} does not wish to share what he likes!</ng-template>

  `,
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent {

  myObject = {
    name: 'Jose',
    gender: 'male',
    age: 33,
    location: 'UK'
  }

  // replace below myArr = false;  to display the ng-template #otherTmpl
  myArr = ['movies', 'series', 'online games'];

}
