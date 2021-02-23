
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
import { ExploreComponent } from './explore/explore.component';
import { FollowingComponent } from './following/following.component';
import { TimelineComponent } from './timeline/timeline.component';

const routes: Routes = [

  { path: 'explore', component: HomeComponent },
  { path: 'timeline', component: TimelineComponent },
  //user
  { path: 'users/register', component: UserRegisterComponent },
  { path: 'users/login', component: LoginComponent },
  //profile
  { path: 'users/profile', component: ProfileComponent },
  //edit profile
  { path: 'users/editprofile', component: EditprofileComponent },
  //follow
  { path: 'users/followers', component: FollowComponent },
  { path: 'users/following', component: FollowingComponent },

  //search by id 
  { path: 'users/id', component: FollowProfileComponent },
  //search
  { path: 'search/:key', component: SearchComponent },
  { path: 'suggestions', component: ExploreComponent},
  { path: 'blogs', component: AddPostComponent },
  { path: 'blogs/detail/:id', component: DetailblogComponent },
  { path: '', redirectTo: '/explore', pathMatch: 'full' },
  { path: 'myblogs', component: UserBlogsComponent },
  { path: '**', component: NotfoundComponent }



];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
