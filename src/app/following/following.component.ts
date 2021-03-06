import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {

    users: User[] = [];
    logged: User = JSON.parse(localStorage.getItem("user"));

    constructor(private userService: UserService, private router: Router) { }
  
    toggelFollow(user: User, toggleBtnState: boolean) {

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
        console.log(this.logged)
        this.userService.getusers().subscribe(
          users => {
            console.log(users);
    
            this.users = users;
          }
        );
    
      }

}
