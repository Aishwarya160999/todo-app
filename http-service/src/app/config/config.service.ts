import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

   studentUrl = 'http://localhost:3000';
url = 'http://localhost:3000/students';



  // Get the details
  getStudents(): Observable<any> {
    return this.http.get(`${this.studentUrl}/Students`)
      .pipe(
        map(res => res)
      );
  }


  httpOptions = {
    Headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }
}

postStudent(): observable<any> {
  return this.http.post('http://localhost:3000/students', students);
  .pipe(
    map(res=> res)
  );


}

