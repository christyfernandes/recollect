
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { DefaultComponent } from './default/default.component';
import { NoteComponent } from './note/note.component';
import { RemainderComponent } from './remainder/remainder.component';
import { TrashComponent } from './trash/trash.component';



const routes: Routes = [
  { 
    path:'',
    component:DefaultComponent,
    children:[
        {path: 'trash', 
        component: TrashComponent
       },
       {path: 'note',
       component: NoteComponent},

       {path:'remainder',
      component:RemainderComponent}
      
    
    

    ]
    
    },
   
  
  
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})




export class HomeRoutingModule { }
