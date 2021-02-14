import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  users: User[] = [];
  loggedUser: User = JSON.parse(localStorage.getItem("user"));

  constructor(private userService: UserService, private router: Router) { }

  toggelFollow(user: User, toggleBtnState: boolean) {

    console.log(toggleBtnState);
    console.log(user);
    
    //follow function takes the id of the user to follow and the logged user
    if(toggleBtnState){
      this.userService.follow(user._id, this.loggedUser).subscribe(
        followedUser => {
          console.log(followedUser);
        }
      );
    }else{
      this.userService.unFollow(user._id, this.loggedUser).subscribe(
        unFollowedUser => {
          console.log(unFollowedUser);
        }
      );
    }
    
  }

  ngOnInit(): void {
    this.userService.getusers().subscribe(
      users => {
        console.log(users);
        let result:User[] = [];
        result = users.filter(user => user._id != this.loggedUser._id)
        if(this.loggedUser.following.length){
          for(let i=0; i < this.loggedUser.following.length; i++){
            console.log(this.loggedUser.following[i]._id)
            result = result.filter(user => user._id != this.loggedUser.following[i]._id)
          }
        }
        console.log(result)
        this.users = result;
      }
    );

  }

}
