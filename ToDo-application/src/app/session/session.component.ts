import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {
  todo!: string[] | null;
  todoForm!: FormGroup;
  constructor(
    private todoservice: SessionService,
    private formBuilder: FormBuilder

  ) { }


  ngOnInit() {
    this.todoForm = this.formBuilder.group({
      title: ['', [Validators.required]]
    });
    this.todo = this.todoservice.findAll();
  }

  add(): void {

    this.todoservice.add(this.todoForm.value.title);
    this.todo = this.todoservice.findAll();
  }
  delete(index: number): void {
    var result = confirm('Are You Sure?');
    if (result) {
      this.todoservice.delete(index);
      this.todo = this.todoservice.findAll();
    }
  }
}



