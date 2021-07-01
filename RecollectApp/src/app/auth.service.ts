import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SingupData } from './singup-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private routr : Router) { }



  save(user:SingupData){
    let body : any = user;
    let d = new Date();
    let hostUrl = 'http://localhost:3000/apps/signup?v='+d.toLocaleTimeString();
    return this.http.post(hostUrl,body);
    
  }
}
