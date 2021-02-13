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

  //search  
  search(key: string) {
    return this.http.get<User[]>("https://yourcoolblogpost.herokuapp.com/user/search/" + key);
  }

  //follow
  follow(id: number, loggedUser: User) {
    return this.http.patch<User>("https://yourcoolblogpost.herokuapp.com/users/follow/" + id, loggedUser);
  }
 //unfollow
  unFollow(id: number, loggedUser: User) {
    return this.http.patch<User>("https://yourcoolblogpost.herokuapp.com/users/unfollow/" + id, loggedUser);
  }

  getusers() {
    return this.http.get<User[]>("https://yourcoolblogpost.herokuapp.com/users");
  }
  //editprofile
  editprofile(user: User) {
    return this.http.patch<User>("https://yourcoolblogpost.herokuapp.com/users", user);
  }
  //deactivate
  deactivate() {
    return this.http.delete<User>("https://yourcoolblogpost.herokuapp.com/users");
  }
  //logout
  logout() {
    return this.http.delete<User>("https://yourcoolblogpost.herokuapp.com/users/logout");
  }


  constructor(public http: HttpClient) { }
}
