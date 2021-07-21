
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthDashBoardGuard } from '../auth-dash-board.guard';

import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
 
import { DefaultComponent } from './default/default.component';
import { NoteComponent } from './note/note.component';
import { RemainderComponent } from './remainder/remainder.component';
import { TrashComponent } from './trash/trash.component';



const routes: Routes = [
  { 
    path:'',
    component:DefaultComponent,
    canActivate :[AuthDashBoardGuard],
    
     children:[
        {path: 'trash', 
        component: TrashComponent,
        canActivate :[AuthDashBoardGuard]
        
       },
       {path: 'note',
       component: NoteComponent,
       canActivate :[AuthDashBoardGuard]
       
       },

       {path:'remainder',
      component:RemainderComponent,
      canActivate :[AuthDashBoardGuard]
   
    },

      {
        path : '**',
        component:PageNotFoundComponent
      }
      
    
    

    ]
    
    },
   
  
  
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})




export class HomeRoutingModule { }
