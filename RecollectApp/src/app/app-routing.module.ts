import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainLayoutComponent } from './Pages/main-layout/main-layout.component';
import { NotesListComponent } from './Pages/notes-list/notes-list.component';

const routes: Routes = [
  { 
    path:'',
    loadChildren: () =>
      import('./validate/validate.module').then((m) => m.ValidateModule),
    },

    { 
      path:'homelink',
      loadChildren: () =>
        import('./home/home.module').then((m) => m.HomeModule),
      },


 /* {path : '' , component: LoginComponent},
  {path : 'login' , component: LoginComponent},
  {path : 'signup' , component: SignupComponent},
  {path : 'mainComponent' , component : MainLayoutComponent , children : [
    { path :'' , component: NotesListComponent}
    
    ]},*/
  
  
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
