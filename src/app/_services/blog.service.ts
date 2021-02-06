import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from '../_models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  getAll(){
    return this.http.get<Blog[]>("https://yourcoolblogpost.herokuapp.com");
  }

  getUserBlogs(){
    return this.http.get<Blog[]>("https://yourcoolblogpost.herokuapp.com");
  }
  addblog(fd:FormData){
    return this.http.post<Blog>("https://yourcoolblogpost.herokuapp.com/blogs",fd,{
      reportProgress:true,
      observe:'events'
    });
  }

  detailblog(id:number){
    return this.http.get<Blog>("https://yourcoolblogpost.herokuapp.com/blogs/"+id)
  }

  deleteblog(id:number){
    return this.http.delete("https://yourcoolblogpost.herokuapp.com/blogs/"+id);
  }
  constructor(public http: HttpClient) { }
}
