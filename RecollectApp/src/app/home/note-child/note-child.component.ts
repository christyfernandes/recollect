import { Component, OnInit,Input,Output,EventEmitter,ViewChild,ElementRef,Renderer2 } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { NoteData } from 'src/app/note-data';



@Component({
  selector: 'app-note-child',
  templateUrl: './note-child.component.html',
  styleUrls: ['./note-child.component.scss']
})
export class NoteChildComponent implements OnInit {

  @Input()
  title: any;


  @Input()
  details: any;

  @Input()
  nData! : NoteData;

  @Output()
  notify :any= new EventEmitter();



  @Input()
  body: any;

  
  @Input() link!: string;
  

  @ViewChild('truncator')
  truncator: ElementRef<HTMLElement>  = {} as ElementRef;



  @ViewChild('bodyText')
  bodyText : ElementRef<HTMLElement> = {} as ElementRef;

  currentRate = 8;
  constructor(private renderer: Renderer2, private authService : AuthService) {
              this.title;
   }

  ngOnInit(): void {
    console.log(" --- title from parent = "+ this.title);
 
 /* let style =  window.getComputedStyle(this.bodyText.nativeElement, null);
    let viewableHeight = parseInt(style.getPropertyValue("height"), 10);

    if (this.bodyText.nativeElement.scrollHeight > viewableHeight) {
      // if there is a text overflow, show the fade out truncator
      this.renderer.setStyle(this.truncator.nativeElement, 'display', 'block');
    } else {
      // else (there is a text overflow), hide the fade out truncator
      this.renderer.setStyle(this.truncator.nativeElement, 'display', 'none');
    }  */
  }


  deleteThisNote()
  {
    this.notify.emit(this.nData);

  }

  saveNote(){
    this.authService.addnote(this.nData).subscribe((response) =>{

      alert('Note Saved !');
       
    });
  }

}
