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
  user!:User;

  status!:string;
  userid: Number=new Number();
  logged:User=new User();
    constructor(private userservice:UserService,private router:Router) { }
   
  

//----------------------------------------------------------------------------------------

   
followw( id:any )
  {
    this.userservice.follow(id, this.logged).subscribe(
     a=> {
       
        console.log(a);
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/home']);
   
     });
     
      }
    )
  }
//----------------------------------------------------------------
  

  // followw(user:User){

  //   // this.toggle = !this.toggle;
  //   // this.status = this.toggle ? 'Enable' : 'Disable';

  //   this.userservice.follow(user._id,this.logged).subscribe(
  //     users => {
        
  //       console.log(users);
       

  //     }
  //   );
    
  // }


  ngOnInit(): void {

    this.status="follow";

    this.logged=JSON.parse(localStorage.getItem("user"));

    this.userservice.getusers().subscribe(
      users => {
        console.log(users);
       
        this.users = users;
      }
    );

    console.log(this.logged._id);
    for(var i=0;i<this.users.length;i++)
    {
             if(this.users[i]._id==this.logged._id)
             {
                   status="my account";
                   
             }
             
            //  else {
            //        for(var j=0;j<this.user.following.length;j++)
            //        {
            //            if(this.users[i]._id==this.user.following[j])
            //             {
            //                  status="following";
            //              }
            //              else{
            //               status="follow";
            //              }
            //        }
            //  }
    }
  
  }


}
