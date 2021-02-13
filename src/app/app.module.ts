import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { TokenInterceptorService } from './_services/token-interceptor.service';
import { UserBlogsComponent } from './user-blogs/user-blogs.component';
import { ProfileComponent } from './profile/profile.component';

import { FollowComponent } from './follow/follow.component';
import { FollowProfileComponent } from './follow-profile/follow-profile.component';

import { AddPostComponent } from './add-post/add-post.component';
import { DetailblogComponent } from './detailblog/detailblog.component';

import { SearchComponent } from './search/search.component';
import { EditprofileComponent } from './editprofile/editprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotfoundComponent,
    UserRegisterComponent,
    LoginComponent,
    UserBlogsComponent,
    ProfileComponent,

    FollowComponent,
    FollowProfileComponent,


    AddPostComponent,
    DetailblogComponent,
    SearchComponent,
    EditprofileComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true,
  }],
  bootstrap: [AppComponent]
})

export class AppModule { }
