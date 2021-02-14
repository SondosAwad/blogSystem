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

  username: String = new String();
  user: User = new User();
  blogs: Blog[] =[];
  blogtemp!: Blog;
  constructor(private userService: UserService, private blogService: BlogService, private router: Router) { }

  getName() {
    this.username = localStorage.getItem("username");
  }
  edit(e, blog, r: any, r1: any) {

    e.style.display = "block";
    console.log(blog);
    console.log(e);
    this.blogtemp = blog;

    r.value = blog.title;
    r1.value = blog.content;

  }
  close(e) {
    e.style.display = "none";

  }

  save(r, r1, e) {
    this.blogtemp.title = r.value;
    this.blogtemp.content = r1.value;
    this.blogService.editblog(this.blogtemp._id, this.blogtemp).subscribe(

      a => {
        e.style.display = "none";
        this.router.navigate(['/users/profile']);
      }
    )
  }
  deletebyid(blog: Blog) {

    this.blogService.deleteblog(blog._id).subscribe(
      d => {
        console.log(d);
        this.router.navigateByUrl("/home");
      }
    )
  }

  //deactivate
  deactivate() {
    this.userService.deactivate().subscribe(
      user => {
        localStorage.clear();
        this.router.navigate(['/users/register']);
      }
    )
  }


  //logout
  logout() {
    this.userService.logout().subscribe(
      user => {
        localStorage.clear();
        this.router.navigate(['/users/login']);
      }
    )
  }


  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
    console.log(this.user)
    this.getName();
    this.blogService.getUserBlogs().subscribe(
      blogs => {
        console.log(blogs);
        this.blogs = blogs;
      }
    );
  }

}


