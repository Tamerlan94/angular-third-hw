import { Component, OnInit } from '@angular/core';
import { someObject } from '../someObject';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  someObjects: someObject[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addItem(obj: someObject) {
    console.log(obj);
    this.someObjects.push(obj);
  }

}
