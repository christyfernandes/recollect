import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthDashBoardGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(" ***************      canActivate  ******localStorage.getItem******* " + localStorage.getItem("userId"));

    //check some condition  
    if (localStorage.getItem("userId") != null)  {
    
      
    //redirect to login/home page etc
    //return false to cancel the navigation
    return true;
    } 
    return false;
  }
  
}
