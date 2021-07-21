import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  userEmailID: String = "R@gmail.com";

  constructor(private authService : AuthService) {

   }

  ngOnInit(): void {

    this.userEmailID = this.authService.getUserEmailId();

  }

  logOut()
  {
    this.authService.logout();
  }

}
