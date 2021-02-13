
import { SearchComponent } from './search/search.component';
import { EditprofileComponent } from './editprofile/editprofile.component';

import { UserRegisterComponent } from './user-register/user-register.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserBlogsComponent } from './user-blogs/user-blogs.component';
import { ProfileComponent } from './profile/profile.component';

import { FollowComponent } from './follow/follow.component';
import { FollowProfileComponent } from './follow-profile/follow-profile.component';

import { AddPostComponent } from './add-post/add-post.component';
import { DetailblogComponent } from './detailblog/detailblog.component';


const routes: Routes = [

  { path: 'home', component: HomeComponent },
  //user
  { path: 'users/register', component: UserRegisterComponent },
  { path: 'users/login', component: LoginComponent },
  //profile
  { path: 'users/profile', component: ProfileComponent },
  //edit profile
  { path: 'users/editprofile', component: EditprofileComponent },
  //follow
  { path: 'users/follow', component: FollowComponent },
  //search by id 
  { path: 'users/id', component: FollowProfileComponent },

  //search
  { path: 'search/:key', component: SearchComponent },

  { path: 'blogs', component: AddPostComponent },
  { path: 'blogs/detail/:id', component: DetailblogComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'myblogs', component: UserBlogsComponent },
  { path: '**', component: NotfoundComponent }



];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
