import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../_models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  
  
  addcomment(id:number,com:Comment){

    return this.http.post<Comment>("https://yourcoolblogpost.herokuapp.com/blogdetail/"+id+"/comment",com);
  }


  constructor(public http: HttpClient) { }
}
