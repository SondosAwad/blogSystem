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

  login(user: User) {
    return this.http.post<User>("https://yourcoolblogpost.herokuapp.com/users/login", user);
  }

  getToken() {
    return localStorage.getItem('token');
  }
  //profile
  profile(username: String) {
    return this.http.get<User>("https://yourcoolblogpost.herokuapp.com/users/profile" + username);
  }


  constructor(public http: HttpClient) { }
}
