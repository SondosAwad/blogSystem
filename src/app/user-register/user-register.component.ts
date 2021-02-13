import { UserService } from './../_services/user.service';
import { User } from './../_models/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  newuser: User = new User();

  constructor(public userService: UserService, public router: Router) { }
  register() {
    console.log(this.newuser);
    this.userService.regist(this.newuser).subscribe(
      a =>
        this.router.navigate(['/home']) //concatinate elments 
    )
  }
  ngOnInit(): void {
  }

}
