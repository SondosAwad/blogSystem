import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from'@angular/common/http'; // interface
import { UserService } from '../_services/user.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req, next){
    let userService = this.injector.get(UserService)
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `${userService.getToken()}`
      }
    });
    return next.handle(tokenizedReq);
  }
}
