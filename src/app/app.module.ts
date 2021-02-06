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
