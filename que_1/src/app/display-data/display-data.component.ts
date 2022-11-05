import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnInit {

  constructor() { }
  a:Number = 42;
  b:String = 'Kevin Patel'
  c:Date = new Date();

  ngOnInit(): void {
  }

}
