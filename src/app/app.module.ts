import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/Button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import $ = require('jquery');

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
<<<<<<< Updated upstream

=======
import { ExploreComponent } from './explore/explore.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    SearchComponent,
    EditprofileComponent

=======
    EditprofileComponent,
    ExploreComponent,
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true,
  }],
  bootstrap: [AppComponent]
})

export class AppModule { }
