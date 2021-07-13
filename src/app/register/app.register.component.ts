import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'register',
  templateUrl: './app.register.component.html',
  styleUrls: ['./app.register.component.scss']
})

export class AppRegisterComponent {
  isFormSubmit: boolean = false;
  passwordMatch: boolean = false;
  registrationForm: FormGroup;
  faTimes = faTimesCircle;
  confirmPassword: string = "";

  constructor() {
    this.registrationForm = new FormGroup({
      email: new FormControl("", [Validators.email, Validators.required]),
      password: new FormControl("", [Validators.required, Validators.minLength(8)])
    });
  }

  matchPassword() {
    if (this.registrationForm.controls["password"].value === this.confirmPassword)
        this.passwordMatch = true;
    else
        this.passwordMatch = false;
  }

  userRegister(formData: FormGroup) {
    this.isFormSubmit = true;
    if (formData.status === "VALID") {
      alert('Registration success');
    } else {

    }
    
    setTimeout(() => {
      this.isFormSubmit = false;
    }, 5000);
  }
}