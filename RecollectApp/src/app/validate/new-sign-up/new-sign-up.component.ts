import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,FormBuilder, Validators} from '@angular/forms';
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

  signupModelForm = new SingupData('','','','','','','','');
   
  passwordErrorFlag: boolean = false;
  constructor(private auth:AuthService, private router: Router ,public formbuilder: FormBuilder ) {

  
    
    
   }

  ngOnInit(): void {
    
      

    }
  

  addUser()
  {


    console.log('firstName='+this.signupModelForm.firstName);
    console.log('lastName='+this.signupModelForm.lastName);
    
    this.auth.save(this.signupModelForm).subscribe((response) =>{

      // alert('New User Registerd Succeesfully !');
      this.router.navigate(['/newLogin'])
    });


    console.log(" ----  Data  ----- = "+ this.signupModelForm.contactNumber);
  }
  checkConfirmPassword(){
   
    
    console.log('password is'+this.signupModelForm.password);

    console.log('confirm passwordis :'+this.signupModelForm.confirmpassword);
    if(this.signupModelForm.password != this.signupModelForm.confirmpassword){
       this.passwordErrorFlag = true;
      
         
    }
  }

}
