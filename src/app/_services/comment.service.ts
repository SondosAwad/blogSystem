import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  
  
  addcomment(fd:FormData,id:number){

    return this.http.post<Comment>("https://yourcoolblogpost.herokuapp.com/blogdetail/"+id+"/comment",fd,{
      reportProgress:true,
      observe:'events'
    });
  }
  constructor(public http: HttpClient) { }
}
