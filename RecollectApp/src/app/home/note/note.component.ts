import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { NoteData } from 'src/app/note-data';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  noteD : any = new NoteData("","",0,"","","New Title","Add Details Here..");


  noteDataArr : any = [ ];



  constructor( private authService : AuthService) { }

  ngOnInit(): void {
    console.log('*****inti******');
    this.authService.getNoteData().subscribe((p: NoteData[])=>{
       console.log('data received3 ::--- '+p);
       if(p != null){
        console.log('inside if notnull')
        this.noteDataArr = p;

       }

       
    })

  }



  addNewNote()
  {
    // console.log("Before  this.noteD.indexPosition -- "+ this.noteD.indexPosition);
    // console.log(" Length of Araay -- "+ this.noteDataArr.length);
    // this.noteD.indexPosition = this.noteDataArr.length;
    console.log(" After this.noteD.indexPosition -- "+ this.noteD.indexPosition);
    this.noteDataArr.push(new NoteData("","",this.noteDataArr.length,"","","New Title","Add Details Here.."));
  }


  deleteNoteElement(cData : NoteData)
  {
    console.log("****This index = "+cData.indexPosition);
    this.noteDataArr.splice(cData.indexPosition, 1);  
    //this.noteDataArr = this.noteDataArr;
  }

}

