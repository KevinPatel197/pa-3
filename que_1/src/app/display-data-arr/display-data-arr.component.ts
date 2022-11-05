import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-data-arr',
  templateUrl: './display-data-arr.component.html',
  styleUrls: ['./display-data-arr.component.css']
})
export class DisplayDataArrComponent implements OnInit {

  constructor() { }
  arr = [1, 2, 3, 4, 5]
  ngOnInit(): void {
  }

}
