import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewLoginComponent } from './new-login/new-login.component';
import { NewSignUpComponent } from './new-sign-up/new-sign-up.component';
import { ValidateRoutingModule } from './validate-routing.module';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from '../error-interceptor';
import { AuthInterceptor } from '../auth-interceptor';


@NgModule({
  declarations: [
    NewLoginComponent,
    NewSignUpComponent,
    HeaderComponent,
    ErrorComponent
  ],
  imports: [

    ReactiveFormsModule,
    FormsModule,
   
    CommonModule,
    ValidateRoutingModule,
  
  ],
  providers:[
   
  ],
  entryComponents:[ErrorComponent]
})
export class ValidateModule { }
