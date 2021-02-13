import { User } from './../_models/user';
import { UserService } from './../_services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  "olduser": User;
  constructor(public userService: UserService, public router: Router, ar: ActivatedRoute) { }

  save() {
    console.log(this.olduser.username);
    this.userService.editprofile(this.olduser).subscribe(
      a => {
        console.log(a);
        this.router.navigateByUrl("/users/profile");
      }
    )
  }
  ngOnInit(): void {
    this.olduser = JSON.parse(localStorage.getItem("user"));
    //console.log(this.olduser.username);
  }

}