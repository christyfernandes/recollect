import { Component, OnInit,Input,Output,EventEmitter,ViewChild,ElementRef,Renderer2 } from '@angular/core';
import { NoteData } from '../note-data';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {

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
  constructor(private renderer: Renderer2) {
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

}
