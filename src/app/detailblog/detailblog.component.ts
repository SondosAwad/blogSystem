import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../_models/blog';
import { Comment } from '../_models/comment';
import { User } from '../_models/user';
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
        comments:Comment[]=[];
        logged:User=new User();
  constructor(private blogService: BlogService,public ar:ActivatedRoute,public r:Router,private commentserv:CommentService) { }

  commentbtn(){

    

    let id=0;
    this.ar.params.subscribe(
      a=>{
        id=a['id']

        this.commentserv.addcomment(id,this.comm).subscribe(
          a=>{
            
            console.log(a);
            console.log(this.comm.content);
            
            this.r.navigateByUrl("/home");
          }
        )
      }
    )
    
  }
    
  
  ngOnInit(): void {
    
    this.logged=JSON.parse(localStorage.getItem("user"));
    let id=0;
    this.ar.params.subscribe(
      a=>{
        id=a['id']

        this.blogService.detailblog(id).subscribe(
          
          d=>{
            this.blog=d
            d.imgURL = "https://yourcoolblogpost.herokuapp.com/images/"+d.imgURL;
            console.log(d);
            console.log(this.blog);

          }
        )
      }

    )



  }

}
