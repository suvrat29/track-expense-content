import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'forgot-password',
  templateUrl: './app.forgot-password.component.html',
  styleUrls: ['./app.forgot-password.component.scss']
})

export class AppForgotPasswordComponent {
  isFormSubmit: boolean = false;
  forgotPasswordForm: FormGroup;
  faTimes = faTimesCircle;

  constructor() {
    this.forgotPasswordForm = new FormGroup({
        email: new FormControl("", [Validators.email, Validators.required])
      });
  }

  forgotPassword(formData: FormGroup) {
    this.isFormSubmit = true;
    
    alert('Sent forgot password email');
    
    setTimeout(() => {
      this.isFormSubmit = false;
    }, 5000);
  }
}