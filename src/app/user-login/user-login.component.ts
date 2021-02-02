import { UserService } from './../_services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  "olduser": User = new User(0, "", "");

  constructor(public userService: UserService, public router: Router) { }

  login() {
    this.userService.login(this.olduser).subscribe(
      a =>
        this.router.navigate(['/home']) //concatinate elments 
    )
  }

  ngOnInit(): void {
  }

}
