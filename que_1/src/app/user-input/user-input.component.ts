import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {

  constructor() { }
  fname = '';
  lname = '';
  email = '';
  city = '';

  a = '';
  b = '';
  c = '';
  d = '';

  toggle = false;

  ngOnInit(): void {
  }
  displayData(a:any, b:any, c:any, d:any)
  {
    this.fname = a;
    this.lname = b;
    this.email = c;
    this.city = d;
    this.toggle = true;
  }
}
