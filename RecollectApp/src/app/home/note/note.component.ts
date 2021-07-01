import { Component, OnInit } from '@angular/core';
import { NoteData } from 'src/app/note-data';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  noteD : any = new NoteData("","","","","New Title","Add Details Here..");


  noteDataArr : any = [ ];



  constructor() { }

  ngOnInit(): void {
  }



  addNewNote()
  {
    // console.log("Before  this.noteD.indexPosition -- "+ this.noteD.indexPosition);
    // console.log(" Length of Araay -- "+ this.noteDataArr.length);
    // this.noteD.indexPosition = this.noteDataArr.length;
    console.log(" After this.noteD.indexPosition -- "+ this.noteD.indexPosition);
    this.noteDataArr.push(new NoteData("","this.noteDataArr.length","","","New Title","Add Details Here.."));
  }


  deleteNoteElement(cData : NoteData)
  {
    console.log("****This = "+this.noteD.indexPosition);
    this.noteDataArr.splice(this.noteD.indexPosition, 1);  
    //this.noteDataArr = this.noteDataArr;
  }

}

