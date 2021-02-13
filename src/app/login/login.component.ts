import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loggedUser: User = new User();

  login() {
    this.userService.login(this.loggedUser).subscribe(
      user => {
        console.log(user);
        this.loggedUser = user;


        //localStorage.setItem('token', user.token);
        localStorage.setItem('user', JSON.stringify(this.loggedUser));

        window.localStorage['username'] = user.username;
        this.router.navigate(['/users/profile']);
      }
    )
  }

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

}
