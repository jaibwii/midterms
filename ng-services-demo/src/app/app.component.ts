import { identifierName } from '@angular/compiler';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { first, last } from 'rxjs';
import { EmployeeService } from './employee.service';
import { CommonModule } from '@angular/common';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-services-demo';

  public employees: {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
  }[] = [];
  public products: {
    productID: string;
    productName: string;
    description: string;
    price: number;
  }[] = [];


  constructor(private _employeeService: EmployeeService, private _productService: ProductsService) {}
  
  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    this.products = this._productService.getProducts();
  }

  
  

  

//   public employees = [{
//     id:101,
//     firstname:'Joseph',
//     lastname:'Dizon',
//     email:'jdizon@hau.edu.ph'
//   },
//   {
//     id:102,
//     firstname:'James',
//     lastname:'Atienza',
//     email:'jaienza@hau.edu.ph'
//   },
//   {
//     id:103,
//     firstname:'John',
//     lastname:'Cena',
//     email:'jcena@hau.edu.ph'
//   },
//   {
//     id:104,
//     firstname:'Robert',
//     lastname:'Quintana',
//     email:'rquintana@hau.edu.ph'
//   },
//   {
//     id:105,
//     firstname:'Jb',
//     lastname:'Reyes',
//     email:'jreyes@hau.edu.ph'
//   }
// ];

// public products = [ {
//   productID: 'P-101',
//   productName: 'Logitech Mouse',
//   description: '6 Button Mechanical Mouse',
//   price:899.00
// },
// {
//   productID: 'P-102',
//   productName: 'JBL BT Speaker',
//   description: 'Waterproof Radio 360 Surround',
//   price: 1099.00
// },
// {
//   productID: 'P-104',
//   productName: 'Mechanical Keyboard',
//   description: 'Hot-swappable RGB Backlit',
//   price: 2395.00
// },
// {
//   productID: 'P-104',
//   productName: 'Oculus Meta',
//   description: 'All-in-one Gaming Headset',
//   price: 22450.00
// }
// ];



}
