import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { HotToastService } from '@ngneat/hot-toast';
import { AppUserService } from '../app.service';

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

  constructor(private userService: AppUserService, private toast: HotToastService, private router: Router) {
    this.registrationForm = new FormGroup({
      email: new FormControl("", [Validators.email, Validators.required]),
      password: new FormControl("", [Validators.required, Validators.minLength(8)]),
      avatar: new FormControl(""),
      firstname: new FormControl("", [Validators.required]),
      lastname: new FormControl("")
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

      this.userService.registerUser(formData.value).pipe(this.toast.observe({
        loading: 'Registering your account...',
        success: 'You have been registered successfully. Please check your email for a verification link.',
        error: 'We were unable to register your account',
      })).subscribe((response: any) => {
        if (response)
          this.router.navigate(['login']);
        else {
          this.toast.error("Data entered in the form is invalid");
          this.isFormSubmit = false;
        }
      });
    } else {
      this.toast.error("Data entered in the form is invalid");
      this.isFormSubmit = false;
    }
  }
}
