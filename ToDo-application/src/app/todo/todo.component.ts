import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

import { todoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todo!: string[] | null;
  todoForm!: FormGroup;
  constructor(
    private todoservice: todoService,
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
  remove(index: number): void {
    var result = confirm('Are You Sure?');
    if (result) {
      this.todoservice.delete(index);
      this.todo = this.todoservice.findAll();
    }
  }
}

