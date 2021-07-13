import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = "track-expense-content";

  //TODO: Later add a check if authData exists then directly login, else take to the login page
  constructor(private router: Router) {
    if (window.location.href === "http://localhost:4200" || window.location.href === "http://localhost:4200/")
      router.navigate(['login']);
  }
}
