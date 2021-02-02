import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  //user
  { path: 'users/register', component: UserRegisterComponent },
  { path: 'users/login', component: UserLoginComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
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
