import { UserRegisterComponent } from './user-register/user-register.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserBlogsComponent } from './user-blogs/user-blogs.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  //user
  { path: 'users/register', component: UserRegisterComponent },
  { path: 'users/login', component: LoginComponent },
  //profile
  { path: 'users/profile', component: ProfileComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'myblogs', component: UserBlogsComponent },
  { path: '**', component: NotfoundComponent }










];




// { path: 'students/details/:id', component: StudentdetailsComponent },
// { path: 'students/edit/:id', component: EditstudentComponent },
// { path: 'students/add', component: StudentaddComponent },
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
