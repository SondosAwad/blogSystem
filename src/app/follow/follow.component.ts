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
    logged: User = JSON.parse(localStorage.getItem("user"));

    constructor(private userService:UserService,private router:Router) { }
   
  
    toggelFollow(user: User, toggleBtnState: boolean) {

      console.log(toggleBtnState);
        
      console.log(user);
  
      //follow function takes the id of the user to follow and the logged user
      if(toggleBtnState){
        this.userService.follow(user._id, JSON.parse(localStorage.getItem("user"))).subscribe(
          followedUser => {
            console.log(followedUser);
            localStorage.setItem("user", JSON.stringify(followedUser));
          }
        );
      }else{
        this.userService.unFollow(user._id, JSON.parse(localStorage.getItem("user"))).subscribe(
          unFollowedUser => {
            console.log(unFollowedUser);
            localStorage.setItem("user", JSON.stringify(unFollowedUser));
          }
        );
      }
    }

      ngOnInit(): void {
        this.logged = JSON.parse(localStorage.getItem("user"));
        this.userService.getusers().subscribe(
          users => {
            console.log(users);
    
            this.users = users;
          }
        );
    
      }


}
