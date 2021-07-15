import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Logindata } from './logindata';
import { SingupData } from './singup-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getToken() {
      throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient, private router : Router) { }



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
        this.router.navigate(['/homelink']);
        
      })


  }
}
