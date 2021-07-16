import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Logindata } from './logindata';
import { NoteData } from './note-data';
import { SingupData } from './singup-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  //this is a token variable
  private token!: string;

  //this is for all details of loggedInuser 
  private loggedInUser! :  SingupData ;

  //this is for all details of loggedInuser 
  private userId: any;

  //tokentimer used for auto expiration of Session
  private tokenTimer: any;

  //isAUthenticated - states weather user is authenticated or not
  private isAuthenticated = false;

  //userRole for admin, student, trainer
  private userRole! : string;

  //status listener variable in case if session expire after duration it notifies other component like headercomponent
  private authStatusListener = new Subject<boolean>();
  


  constructor(private http: HttpClient, private router : Router) { }



  getLoggedInUser()
  { 
    localStorage.getItem('loggedInUser');  
  }

    getIsAuth() {
    //console.log(" Inside getIsAuth ... ");
    //console.log(' this.token ... '+localStorage.getItem("token"));

    if(localStorage.getItem("token") != null)
    {
      //console.log(" Inside getIsAuth ...token not null.. ");
      this.isAuthenticated = true;
    }
    return this.isAuthenticated;
    }


  getAuthStatusListener()
  {
    return this.authStatusListener.asObservable();

  }

  getToken() {
      throw new Error('Method not implemented.');
  }



  save(user:SingupData){
    let body : any = user;
    let d = new Date();
    let hostUrl = 'http://localhost:3000/apps/signup?v='+d.toLocaleTimeString();
    return this.http.post(hostUrl,body);
    
  }


  loginmethod(user:Logindata){
    let body : any = user;
    let ld = new Date();
    let hostUrl = 'http://localhost:3000/apps/loginOne?v='+ld.toLocaleTimeString();
    return this.http.post<{token : string, user :SingupData, expiresIn: number}>(hostUrl, body).subscribe(response => 
      {

         /*This is a logic to set token , loggedIn User , userRole */
         console.log('Response.. '+response.token);
         // console.log('Response.. id'+user._id);
          const token = response.token;
          this.token = token;
          this.loggedInUser = response.user;
          //this.userRole = this.loggedInUser.userType;
          //console.log('this.token.. '+this.token);
           
          /* This is a logic to set expiration time */
          const expiresInDuration = response.expiresIn;
          this.setAuthTimer(expiresInDuration);
          
          /* This is a logic to calculate when token is going to expire */
          const now = new Date();
          const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
          //console.log(expirationDate);
  
          /*This is a logic to save token , expiration date , user Role, logged In User inside local storage */
          this.saveAuthData(token, expirationDate, this.userRole, this.loggedInUser);
  
          /*This is a logic to indicate other authentication listener with real time date */
          this.authStatusListener.next(true);
  
          /*This is a logic to navigate to Home Page.. we can add any component */
        
        this.router.navigate(['/homelink']);
        
      })


  }


   /*This is a log out functionality */
   logout() {
    /* All saved values first we make null */
    this.token = '';
    //this.loggedInUser =   ;
    
    this.isAuthenticated = false;
    this.authStatusListener.next(false);

    /*This function clears all stored data inside local storage */
    localStorage.clear();
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    localStorage.removeItem("userRole");

     /*This is a logic to navigate to Login Page.. we can add any component */
    this.router.navigate(['/login']);
}


/* This function sets timeout and logout function is executed after duration..*/
private setAuthTimer(duration: number) {
console.log("Setting timer: " + duration);
this.tokenTimer = setTimeout(() => {
this.logout();
}, duration * 1000);
}


/* This function saves data into local storage */
private saveAuthData(token: string, expirationDate: Date, userRole: string, loggedInUser :SingupData) {
localStorage.setItem("token", token);
localStorage.setItem("expiration", expirationDate.toISOString());
localStorage.setItem("userRole", userRole);
localStorage.setItem("loggedInUser",  JSON.stringify(loggedInUser));
console.log("***********loggedInUser._id *********** " + loggedInUser._id);
localStorage.setItem("userId",  loggedInUser._id);
   

}


/*This function clears all local storage data */
private clearAuthData() {
localStorage.clear();
localStorage.removeItem("token");
localStorage.removeItem("expiration");
localStorage.removeItem("userRole");
}


/* This function gives us authentication data */
private getAuthData() {
const token = localStorage.getItem("token");
const expirationDate = localStorage.getItem("expiration");
const userId = localStorage.getItem("userId");
if (!token || !expirationDate) {
return;
}
return {
token: token,
expirationDate: new Date(expirationDate),
userId: userId
}
}




//*** Add Note URL  */

addnote(nData:NoteData){
  console.log("***********localStorage.getItem *********** " + localStorage.getItem("userId"));
  let uid = localStorage.getItem("userId");
  console.log("***********uid._id *********** " + uid);
  nData.userId = uid;

    let body : any = nData;
    let d = new Date();
    let hostUrl = 'http://localhost:3000/apps/addNewNote?v='+d.toLocaleTimeString();
    return this.http.post(hostUrl,body);
  
}




 
}
