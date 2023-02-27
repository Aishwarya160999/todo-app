import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toy-output',
  templateUrl: './toy-output.component.html',
  styleUrls: ['./toy-output.component.css']
})
export class ToyOutputComponent  {

  @Output() newToyEvent = new EventEmitter<string>();
  addNewToy(value: string) {
    this.newToyEvent.emit(value);
  }
}