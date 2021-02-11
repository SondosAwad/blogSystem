import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.css']
})
export class FollowComponent implements OnInit {
  users: User[] = [];
  constructor(private userservice:UserService,private router:Router) { }

  toggle = true;
  status = 'Enable'; 

  followw(user:User){

    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Enable' : 'Disable';

    // this.userservice.follow(id,user).subscribe(
    //   users => {
    //     console.log(users);
       
    //   }
    // );
  }

 

  ngOnInit(): void {
    this.userservice.getusers().subscribe(
      users => {
        console.log(users);
       
        this.users = users;
      }
    );
  
  }


}
