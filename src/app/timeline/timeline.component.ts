import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_models/user';
import { Blog } from '../_models/blog';
import { BlogService } from '../_services/blog.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  logged: User = JSON.parse(localStorage.getItem("user"));
  blogsIds: number[] = [];
  blogs: Blog[] = [];

  constructor(public BlogService: BlogService) { }

  ngOnInit(): void {
    this.logged = JSON.parse(localStorage.getItem("user"));
    console.log(this.logged);
    for(let i = 0; i < this.logged.following.length; i++){
      for(let j = 0; j < this.logged.following[i].blogs.length; j++){
        if(this.logged.following[i].blogs[j] > 0)
          this.blogsIds.push(this.logged.following[i].blogs[j]);
        console.log(this.blogsIds);
      }
    }
    for(let i = 0; i < this.blogsIds.length; i++){
      console.log(this.blogsIds[i]);
      this.BlogService.detailblog(this.blogsIds[i]).subscribe(
        blog => {
          this.blogs.push(blog);
        }
      )
    }
    console.log(this.blogs);
  }

}
