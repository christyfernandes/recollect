import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { NoteData } from 'src/app/note-data';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {

  noteDataArr : any = [ ];



  constructor( private authService : AuthService) { }

  ngOnInit(): void {
    console.log('*****inti******');
    this.authService.getTrashData().subscribe((p: NoteData[])=>{
       console.log('data received3 ::--- '+p);
       if(p != null){
        console.log('inside if notnull')
        this.noteDataArr = p;

       }

       
    })

  }


  deleteNoteElement(cData : NoteData)
  {
    console.log("****This index = "+cData.indexPosition);
    this.noteDataArr.splice(cData.indexPosition, 1);  
    //this.noteDataArr = this.noteDataArr;
  }
}
