import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Users } from '../model/Users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  userUrl = 'http://localhost:3000/user';

  getUser(): Observable<any> {
    return this.http.get(this.userUrl).pipe(map(res => {
      return res;
    })
    );
  }
  createUser(data: any): Observable<any> {
    return this.http.post(this.userUrl, data).pipe(map((result: any) => {
      return result;
    })
    );
  }

  updateUser(id: number, data: any): Observable<any> {
    return this.http.put(this.userUrl + '/' + `${id}`, data).pipe(map((result: any) => {
      return result;
    })
    );
  }


  deleteUser(id: number): Observable<any> {
    return this.http.delete(this.userUrl + '/' + `${id}`).pipe(map((result: any) => {

      return result;
    })
    );
  }


}
