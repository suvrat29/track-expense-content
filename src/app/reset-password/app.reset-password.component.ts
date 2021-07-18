import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { HotToastService } from '@ngneat/hot-toast';
import { AppUserService } from '../app.service';

@Component({
  selector: 'reset-password',
  templateUrl: './app.reset-password.component.html',
  styleUrls: ['./app.reset-password.component.scss']
})

export class AppResetPasswordComponent {
  resetPasswordForm: FormGroup;
  isFormSubmit: boolean = false;
  resetSuccess: number = 0;
  email: string = "";
  resetkey: string = "";
  faTimes = faTimesCircle;

  constructor(private router: Router, private route: ActivatedRoute, private userService: AppUserService, private toast: HotToastService) {
    route.queryParams.subscribe((queryData: any) => {
      this.email = queryData["email"];
      this.resetkey = queryData["resetkey"];
    });

    this.resetPasswordForm = new FormGroup({
      password: new FormControl("", [Validators.required, Validators.minLength(8)])
    });
  }

  resetPassword(formData: FormGroup) {
    this.isFormSubmit = true;

    if (formData.value.password.length >= 8) {
      let post: any = {};
      post.email = this.email;
      post.resetkey = this.resetkey;
      post.password = formData.value.password;

      this.userService.resetPassword(post).pipe(this.toast.observe({
        loading: 'Please wait...',
        success: 'Password reset successfully',
        error: 'Failed to reset password. Please try again later',
      })).subscribe((response: any) => {
        this.resetSuccess = 1;
      }, error => {
        this.resetSuccess = 0;
        this.isFormSubmit = false;
      });
    } else {
      this.isFormSubmit = false;
      this.toast.error("Password must be greater than 8 characters");
    }
  }
}
