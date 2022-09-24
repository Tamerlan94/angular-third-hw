import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { job, someObject } from '../someObject';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  @Output() onAdd = new EventEmitter();

  myForm : FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3)]),
    secondName : new FormControl("", [Validators.required]),
    job: new FormControl(job.builder, [Validators.required])
  });

  job = Object.values(job);

  constructor() { }

  ngOnInit(): void {
  }

  addItem(forms: FormGroup){
    let name = forms.controls["name"].value;
    let sname = forms.controls["secondName"].value;
    let job = forms.controls["job"].value;

    let obj : someObject = {name: name, secondName: sname, job: job}

    this.onAdd.emit(obj);
  }

}
