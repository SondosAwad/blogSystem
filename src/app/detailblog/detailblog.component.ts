import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../_models/blog';
import { BlogService } from '../_services/blog.service';

@Component({
  selector: 'app-detailblog',
  templateUrl: './detailblog.component.html',
  styleUrls: ['./detailblog.component.css']
})
export class DetailblogComponent implements OnInit {
       blog:Blog=new Blog("","",0,new Date(),0,"",[]);
  constructor(private blogService: BlogService,public ar:ActivatedRoute,public r:Router) { }


  deletebyid(){
    this.blogService.deleteblog(this.blog._id).subscribe(
      d=>{
        console.log(d);
        this.r.navigateByUrl("/home");
      }
    )
  }

  ngOnInit(): void {
    let id=0;
    this.ar.params.subscribe(
      a=>{
        id=a['id']

        this.blogService.detailblog(id).subscribe(
          
          d=>{
            this.blog=d
            console.log(d);
          }
        )
      }
    )
  }

}
