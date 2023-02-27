import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent 
  {
    name = new FormControl('');
    updateName() {
      this.name.setValue('AISH');
    }
  }


