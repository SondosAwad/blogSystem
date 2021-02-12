import { TokenInterceptorService } from './token-interceptor.service';
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

  //edit profile 
  editprofile(user: User) {
    return this.http.patch<User>("https://yourcoolblogpost.herokuapp.com/users", user);
  }


  //search by id 
  searchbyid(id: number) {
    return this.http.get<User>("https://yourcoolblogpost.herokuapp.com/users/id" + id);
  }
  //follow
  follow(id: number, user: User) {
    return this.http.patch("https://yourcoolblogpost.herokuapp.com/users/follow" + id, user);
  }
  //deactivate
  deactivate() {
    return this.http.delete<User>("https://yourcoolblogpost.herokuapp.com/users");
  }
  //logout
  logout() {
    return this.http.delete<User>("https://yourcoolblogpost.herokuapp.com/users/logout");
  }

  getusers() {
    return this.http.get<User[]>("https://yourcoolblogpost.herokuapp.com/users");
  }


  constructor(public http: HttpClient) { }
}
