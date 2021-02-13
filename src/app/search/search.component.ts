import { UserService } from './../_services/user.service';
import { Blog } from './../_models/blog';
import { Component, OnInit } from '@angular/core';
import { BlogService } from '../_services/blog.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../_models/user';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  key: string = "";
  blogs: Blog[] = [];
  users: User[] = [];
  constructor(private blogService: BlogService, public userService: UserService, private router: Router, public ar: ActivatedRoute) { }

  //to emitt
  //@Output searchevent:EventEmitter<Blog> = new EventEmitter<Blog>();





  ngOnInit(): void {
    //let key:string;
    this.ar.params.subscribe(
      a => {
        this.key = a['key'];


        this.blogService.search(this.key).subscribe(
          a => {
            console.log(a);
            this.blogs = a;


          }
        )




        // this.userService.search(this.key).subscribe(
        //   a => {
        //     console.log(a);
        //     this.users = a;


        //   }
        // )
      }

    )


  }

}
