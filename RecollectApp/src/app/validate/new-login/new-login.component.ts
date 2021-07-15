import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Logindata } from 'src/app/logindata';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-new-login',
  templateUrl: './new-login.component.html',
  styleUrls: ['./new-login.component.scss']
})
export class NewLoginComponent implements OnInit {
  [x: string]: any;
  account:any="/assets/image/account.svg";
  loginDForm!: FormGroup;
  submitFlag : boolean = false;

  constructor(private router : Router ,private auth:AuthService) { 

    this.loginDForm = new FormGroup({

      email : new FormControl("",{validators:[Validators.required] }),
    password : new FormControl("",{validators:[Validators.required] }),
  
  })
}
  ngOnInit(): void {
  }

  login()
   {
     this.submitFlag = true;
     if(this.loginDForm.invalid)
     {

     }
     else{
       this.submitFlag = false;
      //  alert("value = "+this.loginDForm.value.username);
      //  alert("value = "+this.loginDForm.value.password);


       let loginF = new Logindata(this.loginDForm.value.email,this.loginDForm.value.password);
       alert("X =" + loginF.email);
       this.auth.loginmethod(loginF);
      // this.router.navigate(['/homelink']);
     }
     
   }




}
