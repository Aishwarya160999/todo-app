import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { ConfigService } from './config/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http-service';

   public student : Observable<Istudent[]> | any;
  constructor(public configservice : ConfigService){}

  // get the data form th students
  ngOnInit(){
    this.configservice.getStudents().subscribe(res => {
      this.student=res;
    })
  }
}
