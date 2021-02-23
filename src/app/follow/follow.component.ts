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

    toggelUnFollow(user: User, toggleBtnState: boolean){
      console.log(toggleBtnState);
        
      console.log(user);
  
      //follow function takes the id of the user to follow and the logged user
      if(toggleBtnState){
        this.userService.unFollow(user._id, JSON.parse(localStorage.getItem("user"))).subscribe(
          unFollowedUser => {
            console.log(unFollowedUser);
            localStorage.setItem("user", JSON.stringify(unFollowedUser));
          }
        );
      }else{
        this.userService.follow(user._id, JSON.parse(localStorage.getItem("user"))).subscribe(
          followedUser => {
            console.log(followedUser);
            localStorage.setItem("user", JSON.stringify(followedUser));
          }
        );
      }
    }

      ngOnInit(): void {
        this.logged = JSON.parse(localStorage.getItem("user"));
        this.logged.followers?.forEach(user => user.status = false);
        this.logged.following?.forEach(user => user.status = false);
        this.logged.following?.forEach(user => console.log(user));
        for(let i = 0; i < this.logged.followers.length; i++){
          for(let j = 0; j < this.logged.following?.length; j++){
            if(this.logged.followers[i]._id == this.logged.following[j]._id){
              this.logged.followers[i].status = true;
            }
          }
        }
        
        this.userService.getusers().subscribe(
          users => {
            console.log(users);
    
            this.users = users;
          }
        );
    
      }


}
