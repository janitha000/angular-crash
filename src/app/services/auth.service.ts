import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import {config} from '../config/config';
import { LoginResponse } from '../models/LoginResponse';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject! : BehaviorSubject<User>;

  constructor(private http : HttpClient) {
    let user : User = {
      email  : localStorage.getItem('email'),
      token : localStorage.getItem('token'),
      role : localStorage.getItem('role')

    }
    this.userSubject = new BehaviorSubject<User>(user);
   }

  login(username : string, password : string) {
    const url = `${config.apiUrl}/api/Auth/Login`;
    return this.http.post<LoginResponse>(url, {email: username, password})
      .pipe(map(response => {
        localStorage.setItem('token', response.token);
        return response
      }));
  }

  public get userValue(): User {
    return this.userSubject.value;
}
}
