import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-arr-combo',
  templateUrl: './display-arr-combo.component.html',
  styleUrls: ['./display-arr-combo.component.css']
})
export class DisplayArrComboComponent implements OnInit {

  constructor() { }
  arr = ['textbox', 'textarea'];
  val = ''
  ngOnInit(): void {
  }

}
