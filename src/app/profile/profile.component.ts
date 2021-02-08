import { User } from './../_models/user';
import { UserService } from './../_services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username: String=new String();

  constructor(private userService: UserService, private router: Router) { }

  getName() {
    this.username = localStorage.getItem("username");
  }

  ngOnInit(): void {
    this.getName();
  }

}


