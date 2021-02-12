import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../_models/blog';
import { Comment } from '../_models/comment';
import { BlogService } from '../_services/blog.service';
import { CommentService } from '../_services/comment.service';

@Component({
  selector: 'app-detailblog',
  templateUrl: './detailblog.component.html',
  styleUrls: ['./detailblog.component.css']
})
export class DetailblogComponent implements OnInit {

       blog:Blog=new Blog("","",0,new Date(),0,"",[]);

       comm:Comment=new Comment(0,"","",0,new Date(),0);


       fd:FormData=new FormData();
  constructor(private blogService: BlogService,public ar:ActivatedRoute,public r:Router,private commentserv:CommentService) { }


  deletebyid(){
    this.blogService.deleteblog(this.blog._id).subscribe(
      d=>{
        console.log(d);
        this.r.navigateByUrl("/home");
      }
    )
  }
  commentbtn(){
    
        this.fd.append('content',this.comm.content);

    let id=0;
    this.ar.params.subscribe(
      a=>{
        id=a['id']

        this.commentserv.addcomment(this.fd,id).subscribe(
          a=>{
            
            console.log(a);
            
            this.r.navigateByUrl("/home");
          }
        )
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
            d.imgURL = "https://yourcoolblogpost.herokuapp.com/images/"+d.imgURL;
            console.log(this.blog.comments);
          }
        )
      }
    )



  }

}
