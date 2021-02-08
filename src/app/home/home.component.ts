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
  fd:FormData=new FormData();
  constructor(private blogService: BlogService,private router:Router) { }

  // save(){
  //   this.blogService.addblog(this.newblog).subscribe(
  //     a=>{
  //       console.log(a);
  //       this.router.navigateByUrl("/home");
  //     }
  //   )
  // }

  onfileselected(event:any){

    var selectedfile=event.target.files[0];
    this.fd=new FormData();
    this.fd.append('imgURL',selectedfile,selectedfile.name);
    console.log(selectedfile);
  }

  save(){
        console.log(this.newblog.title);
        console.log(this.newblog.imgURL);
        
        this.fd.append('title',this.newblog.title);
        this.fd.append('content',this.newblog.content);
       // this.fd.append('tags',this.newblog.tags);
           
    this.blogService.addblogimg(this.fd).subscribe(
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
