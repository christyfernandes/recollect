import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivateChild {
  constructor(private   router : Router) {

  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot,): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   
    console.log(" ***************      canActivateChild  ******localStorage.getItem******* " + localStorage.getItem("userId"));

    //check some condition  
    if (localStorage.getItem("userId") == null)  {
    alert('You are not allowed to view this page');
    //redirect to login/home page etc
    //return false to cancel the navigation
  this.router.navigate(['homelink/error'])
    } 
    return true;
    }
  }
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }


  

