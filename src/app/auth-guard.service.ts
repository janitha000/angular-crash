import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService : AuthService, private router : Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const user = this.authService.userValue;
    if(user.token)
    {
      if(route.data.roles)
      {
        if(route.data.roles.indexOf(user.role) === -1){
          this.router.navigate(['/forbidden']);
          return false; 
        }
        else {
          return true;
        }
      }else {
        return true;
      }
      
    }
      

    // const expectedRole = route.data.expectedRole;
    // console.log(expectedRole);
    // return true;

    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }
}
