
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { job, someObject } from '../someObject';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() onAdd = new EventEmitter()

  job = Object.values(job);
  name: string = '';
  secondName: string = '';
  selectedJob: string = job.builder;

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    console.log("кнопка нажата");
    let obj: someObject = { name: this.name, secondName: this.secondName, job: this.selectedJob }
    this.onAdd.emit(obj);
  }
}
