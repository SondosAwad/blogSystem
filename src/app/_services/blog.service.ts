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
    return this.http.get<Blog[]>("https://yourcoolblogpost.herokuapp.com/blogs");
  }
  addblogimg(fd:FormData){
    return this.http.post<Blog>("https://yourcoolblogpost.herokuapp.com/blogs",fd,{
      reportProgress:true,
      observe:'events'
    });
  }
  addblog(blog:Blog){
    return this.http.post<Blog>("https://yourcoolblogpost.herokuapp.com/blogs",blog);
  }

  detailblog(id:number){
    return this.http.get<Blog>("https://yourcoolblogpost.herokuapp.com/blogs/"+id)
  }








  
  deleteblog(id:number){
    return this.http.delete("https://yourcoolblogpost.herokuapp.com/blogs/"+id);
  }
  editblog(id:number,blog:Blog){
    return this.http.patch("https://yourcoolblogpost.herokuapp.com/blogs/"+id,blog);
  }
  
  constructor(public http: HttpClient) { }
}
