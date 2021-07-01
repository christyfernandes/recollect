import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { SingupData } from 'src/app/singup-data';

@Component({
  selector: 'app-new-sign-up',
  templateUrl: './new-sign-up.component.html',
  styleUrls: ['./new-sign-up.component.scss']
})
export class NewSignUpComponent implements OnInit {

  account:any="/assets/image/account.svg";

  signupModelForm = new SingupData('','','','','','');
  
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }


  addUser()
  {
    this.auth.save(this.signupModelForm).subscribe((response) =>{

      alert('New User Registerd Succeesfully !');
    });

    console.log(" ----  Data  ----- = "+ this.signupModelForm.contactNumber);
  }

}
