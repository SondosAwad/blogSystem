
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

  "edituser": User;
  username: String = new String();
  userpassword: String = new String();
  useremail: String = new String();
  userid: Number = new Number();

  //"tempuser": User;


  constructor(public userService: UserService, public router: Router, ar: ActivatedRoute) {

  }
  getdata() {

    this.edituser = JSON.parse(localStorage.getItem("user"));
    console.log(this.edituser.username);


  }


  save() {
    //console.log(this.username);
    console.log(this.edituser.email);
    this.edituser.username = this.username;
    this.edituser.email = this.useremail;
    this.edituser.password = this.userpassword;


    this.userService.editprofile(this.edituser).subscribe(
      a => {
        console.log(a);

        this.router.navigateByUrl("/users/profile");
      }
    )
  }

  ngOnInit(): void {
    this.getdata();
  }

}