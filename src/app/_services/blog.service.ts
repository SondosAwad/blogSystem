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

  constructor(public http: HttpClient) { }
}
