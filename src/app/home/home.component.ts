import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../_models/blog';
import { BlogService } from '../_services/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  blogs: Blog[] = [];
  newblog:Blog=new Blog("","",0,new Date(),0,"",[]);

  constructor(private blogService: BlogService,private router:Router) { }

  save(){
    this.blogService.addblog(this.newblog).subscribe(
      a=>{
        console.log(a);
        this.router.navigateByUrl("/home");
      }
    )
  }
  ngOnInit(): void {
    this.blogService.getAll().subscribe(
      blogs => {
        console.log(blogs);
        this.blogs = blogs;
      }
    );
  }

}
