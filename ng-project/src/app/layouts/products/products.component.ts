import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: [],
})
export class ProductsComponent {
  title = 'Angular Welcomes You.!';

  mobParts = [
    {
      id: 1001,
      name: 'Mobile screen 1',
      inStock: 0,
      prodColor: 'red',
      veg: true,
      country: 'India',
      price: 12000,
    },

    {
      id: 1002,
      name: 'MOBILE Screen 2',
      inStock: 15,
      prodColor: 'green',
      veg: false,
      country: 'Germany',
      price: 12000,
    },

    {
      id: 1003,
      name: 'Mobile Screen 3',
      inStock: 50,
      prodColor: 'blue',
      veg: true,
      country: '',
      price: 12000,
    },
  ];
}
