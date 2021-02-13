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
<<<<<<< Updated upstream
  //search by id 
  searchbyid(id: number) {
    return this.http.get<User>("https://yourcoolblogpost.herokuapp.com/users/id" + id);
=======

  //edit profile 
  editprofile(user: User) {
    return this.http.patch<User>("https://yourcoolblogpost.herokuapp.com/users", user);
  }


  //search  
  search(key: string) {
    return this.http.get<User[]>("https://yourcoolblogpost.herokuapp.com/user/search/" + key);

>>>>>>> Stashed changes
  }



  //follow
  follow(id: number,user: User) {
    return this.http.patch("https://yourcoolblogpost.herokuapp.com/users/follow" + id,user);
  }

  getusers(){
    return this.http.get<User[]>("https://yourcoolblogpost.herokuapp.com/users");
  }

  editprofile(user: User) {​​​​
    return this.http.patch<User>("https://yourcoolblogpost.herokuapp.com/users", user );
  }​​​​

  

  constructor(public http: HttpClient) { }
}
