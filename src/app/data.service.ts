import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  cars = [
    'Fiat', 'Mercedes', 'Wolswagen'
  ];

  myData() {
    return 'This is my awesome data.';
  }

}
