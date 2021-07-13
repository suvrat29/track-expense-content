import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'login',
  templateUrl: './app.login.component.html',
  styleUrls: ['./app.login.component.scss']
})

export class AppLoginComponent {
  isUserSigningIn: boolean = false;
  loginForm: FormGroup;
  faTimes = faTimesCircle;

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.email, Validators.required]),
      password: new FormControl("", [Validators.required, Validators.minLength(8)]),
      remember: new FormControl("")
    });
  }

  userLogin(formData: FormGroup) {
    this.isUserSigningIn = true;
    
    if (formData.status === "VALID") {
      alert('Login success');
    } else {

    }
    
    setTimeout(() => {
      this.isUserSigningIn = false;
    }, 5000);
  }
}
