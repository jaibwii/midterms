import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { MyserviceService } from './myservice.service';
import { NewCmpComponent } from "./new-cmp/new-cmp.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NewCmpComponent],  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'ng-pipes-demo';
  todaydate;
  componentproperty;
  constructor(private myservice: MyserviceService) { 
    this.todaydate = this.myservice.showTodayDate();
    this.componentproperty = this.myservice.serviceproperty;
  }
  
  presentDate = new Date();
  time$ = interval(1000).pipe(
    map(() => new Date())
  );

  price : number = 20000; ngOnInit() {

  }

  Fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes, Pineapple'];

  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;

  testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  testObject = {
    name: 'Jb',
    age: 21,
    food: 'Kimchi Stew',
  };


}
