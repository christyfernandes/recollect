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
        
        this.router.navigate(['/homelink/note']);
        
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
localStorage.removeItem("userId");
localStorage.removeItem("userEmailId");
localStorage.removeItem("loggedInUser");
localStorage.removeItem("token");
localStorage.removeItem("expiration");
localStorage.removeItem("userRole");

     /*This is a logic to navigate to Login Page.. we can add any component */
    this.router.navigate(['/newLogin']);
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
localStorage.setItem("userEmailId",  loggedInUser.email);
   
   

}


/*This function clears all local storage data */
private clearAuthData() {
localStorage.clear();
localStorage.removeItem("userId");
localStorage.removeItem("userEmailId");
localStorage.removeItem("loggedInUser");
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







// getNoteData function is for fetching all notes
getNoteData() : any{
  console.log("inside this function getnotedata()");
  let d = new Date();
  let hostUrl = 'http://localhost:3000/apps/getAllNoteData/';
  let uid = localStorage.getItem("userId");
  console.log("***********uid._id *********** " + uid);
  hostUrl = hostUrl + uid;
  return this.http.get(hostUrl);
}

//getUserEmailId function is use for diplay user account email id
getUserEmailId() : any{
  
console.log('inside getuseremailid function');
  console.log("email = "+localStorage.getItem('userEmailId')  );
  return localStorage.getItem('userEmailId');  
}



//*** Add Note URL  */

addnote(nData:NoteData){
  console.log("***********localStorage.getItem *********** " + localStorage.getItem("userId"));
  let uid = localStorage.getItem("userId");
  console.log("***********uid._id *********** " + uid);
  nData.userId = uid;
  nData.reminder=0;
  nData.draft=1;
  nData.trash=0;

    let body : any = nData;
    let d = new Date();
    let hostUrl = 'http://localhost:3000/apps/addNewNote?v='+d.toLocaleTimeString();
     this.http.post(hostUrl,body).subscribe(response => {
      this.router.navigate(['/homelink/note']);
    });
  
}



// saveReminder fuction for save note in remainder page to database
saveReminder(nData:NoteData){

  console.log("note save in reminder"+ nData);
  nData.reminder=1;
  nData.draft=0;
  nData.trash=0;
  let body : any = nData;
    let ld = new Date();
    let hostUrl = 'http://localhost:3000/apps/updatereminder/';
    let uid = nData._id;
    hostUrl = hostUrl + uid;
   
    return this.http.put<{ user :SingupData}>(hostUrl, body).subscribe(response => 
      {
        console.log("save remainder successfully");
        this.router.navigate(['/homelink/remainder']);
      });

  

}
saveDraft(nData:NoteData){
  console.log("note save in draft"+ nData);
  nData.reminder=0;
  nData.draft=1;
  nData.trash=0;
  let body : any = nData;
    let ld = new Date();
    let hostUrl = 'http://localhost:3000/apps/updatereminder/';
    let uid = nData._id;
    hostUrl = hostUrl + uid;
   
    return this.http.put<{ user :SingupData}>(hostUrl, body).subscribe(response => 
      {
        console.log("save trash successfully");
        this.router.navigate(['/homelink/note']);
      });
}
saveTrash(nData:NoteData){
  console.log("note save in trash"+ nData);
  nData.reminder=0;
  nData.draft=0;
  nData.trash=1;
  let body : any = nData;
    let ld = new Date();
    let hostUrl = 'http://localhost:3000/apps/updatereminder/';
    let uid = nData._id;
    hostUrl = hostUrl + uid;
   
    return this.http.put<{ user :SingupData}>(hostUrl, body).subscribe(response => 
      {
        console.log("save trash successfully");
        this.router.navigate(['/homelink/trash']);
      });

  

}





///getReminder Page Data

// getNoteData function is for fetching all notes
getReminderData() : any{
  console.log("inside this function getReminderData()");
  let d = new Date();
  let hostUrl = 'http://localhost:3000/apps/getReminderNoteData/';
  let uid = localStorage.getItem("userId");
  console.log("***********uid._id *********** " + uid);
  hostUrl = hostUrl + uid;
  return this.http.get(hostUrl);
}


// getNoteData function is for fetching all notes
getDraftNotesData() : any{
  console.log("inside this function getDraftNotesData()");
  let d = new Date();
  let hostUrl = 'http://localhost:3000/apps/getDraftNoteData/';
  let uid = localStorage.getItem("userId");
  console.log("***********uid._id *********** " + uid);
  hostUrl = hostUrl + uid;
  hostUrl= hostUrl+'?v='+d.toLocaleDateString();
  return this.http.get(hostUrl);
}

getTrashData() : any{
  console.log("inside this function getTrashData()");
  let d = new Date();
  let hostUrl = 'http://localhost:3000/apps/getTrasheData/';
  let uid = localStorage.getItem("userId");
  console.log("***********uid._id *********** " + uid);
  hostUrl = hostUrl + uid;
  return this.http.get(hostUrl);
}


 
}
