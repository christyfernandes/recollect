import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { SingupData } from 'src/app/singup-data';

@Component({
  selector: 'app-new-sign-up',
  templateUrl: './new-sign-up.component.html',
  styleUrls: ['./new-sign-up.component.scss']
})
export class NewSignUpComponent implements OnInit {

  account:any="/assets/image/account.svg";

  signupModelForm = new SingupData('','','','','','','');
  
  constructor(private auth:AuthService, private router: Router ) { }

  ngOnInit(): void {
  }


  addUser()
  {


    console.log('firstName='+this.signupModelForm.firstName);
    console.log('lastName='+this.signupModelForm.lastName);
    
    this.auth.save(this.signupModelForm).subscribe((response) =>{

      alert('New User Registerd Succeesfully !');
      this.router.navigate(['/newLogin'])
    });

    console.log(" ----  Data  ----- = "+ this.signupModelForm.contactNumber);
  }

}
