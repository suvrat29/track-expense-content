import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { HotToastService } from '@ngneat/hot-toast';
import { AppUserService } from '../app.service';

@Component({
  selector: 'forgot-password',
  templateUrl: './app.forgot-password.component.html',
  styleUrls: ['./app.forgot-password.component.scss']
})

export class AppForgotPasswordComponent {
  isFormSubmit: boolean = false;
  forgotPasswordForm: FormGroup;
  faTimes = faTimesCircle;
  forgotSuccess: number = 0;

  constructor(private userService: AppUserService, private toast: HotToastService) {
    this.forgotPasswordForm = new FormGroup({
      email: new FormControl("", [Validators.email, Validators.required])
    });
  }

  forgotPassword(formData: FormGroup) {
    this.isFormSubmit = true;

    this.userService.forgotPassword(formData.value).pipe(this.toast.observe({
      loading: 'Please wait...',
      success: 'An email has been sent to reset your password',
      error: 'Failed to send an email. Please try again later',
    })).subscribe((response: any) => {
      this.forgotSuccess = 1;
    }, error => {
      this.isFormSubmit = false;
    });
  }
}
