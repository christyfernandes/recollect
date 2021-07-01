import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewLoginComponent } from './new-login/new-login.component';
import { NewSignUpComponent } from './new-sign-up/new-sign-up.component';
import { ValidateRoutingModule } from './validate-routing.module';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NewLoginComponent,
    NewSignUpComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ValidateRoutingModule,
    FormsModule
  ]
})
export class ValidateModule { }
