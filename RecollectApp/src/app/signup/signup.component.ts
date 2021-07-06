import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { SingupData } from '../singup-data';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  account:any="/assets/image/account.svg";

  // signupModelForm = new SingupData('','','','','','');
  
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }


  // addUser()
  // {
  //   this.auth.save(this.signupModelForm).subscribe((response) =>{

  //     alert('New User Registerd Succeesfully !');
  //   });

  //   console.log(" ----  Data  ----- = "+ this.signupModelForm.contactNumber);
  // }

}
