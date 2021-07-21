import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { NoteData } from 'src/app/note-data';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  noteD : any = new NoteData("","",0,"","","New Title","Add Details Here..","","","",);

  noteDataArr : any = [ ];
takeNoteFlag :boolean = false;
nData : any = new NoteData("","",this.noteDataArr.length,"","","New Title","Add Details Here..","","","");


  constructor( private authService : AuthService) { }

  ngOnInit(): void {
    console.log('*****inti******');
    this.authService.getDraftNotesData().subscribe((p: NoteData[])=>{
       console.log('data received3 ::--- '+p);
       if(p != null){
        console.log('inside if notnull')
        this.noteDataArr = p;

       }

       
    })

  }
  showCard(){
    if(this.takeNoteFlag = true){
    console.log("first card show");
  }
  else{
 this.takeNoteFlag = false;
  }

  }

  addNewNote()
  {
    // console.log("Before  this.noteD.indexPosition -- "+ this.noteD.indexPosition);
    // console.log(" Length of Araay -- "+ this.noteDataArr.length);
    // this.noteD.indexPosition = this.noteDataArr.length;
    console.log(" After this.noteD.indexPosition -- "+ this.noteD.indexPosition);
    this.noteDataArr.push(new NoteData("","",this.noteDataArr.length,"","","New Title","Add Details Here..","","",""));
  }
  saveNote(){
    this.authService.addnote(this.nData);
    window.location.reload();
    //this.showCard();
    
  }


  deleteNoteElement(cData : NoteData)
  {
    console.log("****This index = "+cData.indexPosition);
    this.noteDataArr.splice(cData.indexPosition, 1);  
    //this.noteDataArr = this.noteDataArr;
  }

}

