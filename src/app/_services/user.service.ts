import { User } from './../_models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  regist(user: User) {
    return this.http.post<User>("https://yourcoolblogpost.herokuapp.com/users/register", user);
  }

  constructor(public http: HttpClient) { }
}
