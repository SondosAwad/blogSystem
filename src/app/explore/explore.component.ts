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
  constructor(private userService: UserService, private router: Router) { }

  status = 'Follow';

  toggelFollow(user: User, toggleBtnState: boolean) {

    console.log(toggleBtnState);
    
    this.status = toggleBtnState ? 'Unfollow' : 'Follow';

    console.log(user);

    //follow function takes the id of the user to follow and the logged user
    if(toggleBtnState){
      this.userService.follow(user._id, JSON.parse(localStorage.getItem(user))).subscribe(
        followedUser => {
          console.log(followedUser);
        }
      );
    }else{
      this.userService.unFollow(user._id, JSON.parse(localStorage.getItem(user))).subscribe(
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

        this.users = users;
      }
    );

  }

}
