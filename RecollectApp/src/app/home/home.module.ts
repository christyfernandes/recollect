import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { NoteComponent } from './note/note.component';
import { RemainderComponent } from './remainder/remainder.component';
import { TrashComponent } from './trash/trash.component';
import { DefaultComponent } from './default/default.component';
import { HomeRoutingModule } from './home-routing.module';
import { NoteChildComponent } from './note-child/note-child.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SideNavComponent,
    NoteComponent,
    RemainderComponent,
    TrashComponent,
    DefaultComponent,
    NoteChildComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ]
})
export class HomeModule { }
