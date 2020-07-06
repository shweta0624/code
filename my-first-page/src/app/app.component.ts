import { Component, NgModule } from '@angular/core';
@Component({
  selector: 'app-start',
  templateUrl: '',
  //template: '',//
})
export class AppComponent {
  title = 'Hello World...!';

  mobParts = [
    {
      name: 'Mobile screen 1',
      id: 1001,
    },
    {
      name: 'Mobile screen 2',
      id: 1002,
    },
    {
      name: 'Mobile screen 3',
      id: 1003,
    },
  ];
}
