import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NewLoginComponent } from './new-login/new-login.component';
import { NewSignUpComponent } from './new-sign-up/new-sign-up.component';


const routes: Routes = [
  { 
    path:'',
    component: HeaderComponent,
    children:[
        {path: 'newLogin', 
        component: NewLoginComponent
       },
       {path: 'newSignUp',
       component: NewSignUpComponent}
        ]
    
    },

    
        { 
            path:'homelink',
            loadChildren: () =>
              import('../home/home.module').then((m) => m.HomeModule),
            },
      
   
  
  
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValidateRoutingModule{

}