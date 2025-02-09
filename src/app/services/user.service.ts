import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../core/interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }


  signup(user:any): Observable<any> {

    return this.http.post('http://localhost:3000/user/signup', user)
  }


    login(user:any): Observable<any>{
      return this.http.post('http://localhost:3000/user/login', user)
    }
}
