import { User } from './../_models/user';
import { UserService } from './../_services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../_models/blog';
import { BlogService } from '../_services/blog.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

 // blog:Blog=new Blog("","",0,new Date(),0,"",[]);
  username: String=new String();
  blogs!: Blog[];
  blogtemp!:Blog;
  constructor(private userService: UserService,private blogService: BlogService, private router: Router) { }

  getName() {
    this.username = localStorage.getItem("username");
  }

  deletebyid(blog:Blog){

    this.blogService.deleteblog(blog._id).subscribe(
      d=>{
        console.log(d);
        this.router.navigateByUrl("/home");
      }
    )
  }
     edit(e:any,blog:Blog,r:any,r1:any){
           
            e.style.display="block";
            console.log(blog);
            console.log(e);
            this.blogtemp=blog;

            r.value=blog.title;
            r1.value=blog.content;

     }
     close(e)
     {
       e.style.display="none";
       
     }

     save(r:any,r1:any,e:any){
                 this.blogtemp.title=r.value;
                 this.blogtemp.content=r1.value;
         this.blogService.editblog(this.blogtemp._id,this.blogtemp).subscribe(

          a=>{
            e.style.display="none";
            this.router.navigate(['/users/profile']);
          }
         )
     }

  ngOnInit(): void {
    this.getName();
    this.blogService.getUserBlogs().subscribe(
      blogs => {
        console.log(blogs);
        blogs.forEach(blog => blog.imgURL = "https://yourcoolblogpost.herokuapp.com/images/"+blog.imgURL);
        this.blogs = blogs;
      }
    );
  }

}


