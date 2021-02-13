import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './_services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blogSystem';

  constructor(public userService: UserService, public router:Router) { }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  logout() {
    this.userService.logout().subscribe(
      user => {
        localStorage.clear();
        this.router.navigate(['/users/login']);
      }
    )
  }
  gosearch(k: string) {
    location.reload();
    console.log(k);
  }
  
}

  



