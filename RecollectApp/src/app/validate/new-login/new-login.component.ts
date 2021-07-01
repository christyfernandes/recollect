import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-login',
  templateUrl: './new-login.component.html',
  styleUrls: ['./new-login.component.scss']
})
export class NewLoginComponent implements OnInit {
  account:any="/assets/image/account.svg";
  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  login()
  {
    this.router.navigate(['/homelink']);
  }



}
