import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {

  constructor( private route  : Router) { }

  ngOnInit(): void {
  }

  undo(){
    this.route.navigate(['/homelink/note']);

  }
}
