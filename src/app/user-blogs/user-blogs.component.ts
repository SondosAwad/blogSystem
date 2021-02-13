import { Blog } from './../_models/blog';
import { Component, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';
import { BlogService } from '../_services/blog.service';

@Component({
  selector: 'app-user-blogs',
  templateUrl: './user-blogs.component.html',
  styleUrls: ['./user-blogs.component.css']
})
export class UserBlogsComponent implements OnInit {

  blogs: Blog[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getUserBlogs().subscribe(
      res => console.log(res)
    )
  }

}
