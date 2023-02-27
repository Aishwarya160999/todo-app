import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Student } from '../model/Student';
@Injectable({
  providedIn: 'root'
})
export class StudentService{
  
  
  constructor(private http: HttpClient) { }
  studenturl = 'http://localhost:3000/Studentdetails';


  // Creating student details
  createStudent(data: any):Observable<any> {
    return this.http.post(this.studenturl, data).pipe
      (map((result: any) => {
        return result;
      })
      );
  }

  // Get the data
  getStudnet():Observable<any> {
    return this.http.get(this.studenturl).pipe
      (map(result => {
        return result;
      })
      );
  
    }
    updateStudent(id: number, data: any): Observable<any>{
      return this.http.put(`http://localhost:3000/Students/${id}`, data)
        .pipe(
          map((res: any) => {
            return res;
          })
        );
    }
  
    removeStudent(id: number): Observable<any>{
      return this.http.delete(`http://localhost:3000/Students/${id}`)
        .pipe(
          map((res: any) => {
            return res;
          })
        );
    }
  }

    