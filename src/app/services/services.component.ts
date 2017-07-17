import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-services',
  template: `

    <p title="{{ someProperty }}">Services example used with title attribute.</p>

  `,
  styles: [`

    p {
      color: orange;
    }

    `]
})
export class ServicesComponent implements OnInit {

  constructor(private dataService:DataService) { }

  someProperty:string = '';

  ngOnInit() {
    alert(this.dataService.cars);

    this.someProperty = this.dataService.myData();
  }

}
