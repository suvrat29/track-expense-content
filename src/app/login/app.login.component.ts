import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { HotToastService } from '@ngneat/hot-toast';
import { AppUserService } from '../app.service';
import { TokenService } from '../auth-service/auth.token.service';

@Component({
  selector: 'login',
  templateUrl: './app.login.component.html',
  styleUrls: ['./app.login.component.scss']
})

export class AppLoginComponent {
  isUserSigningIn: boolean = false;
  loginForm: FormGroup;
  faTimes = faTimesCircle;

  constructor(private userService: AppUserService, private toast: HotToastService, private tokenService: TokenService) {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.email, Validators.required]),
      password: new FormControl("", [Validators.required, Validators.minLength(8)]),
      remember: new FormControl("")
    });
  }

  userLogin(formData: FormGroup) {
    this.isUserSigningIn = true;
    
    if (formData.status === "VALID") {
      this.userService.login(formData.value).pipe(this.toast.observe({
        loading: 'Logging in...',
        success: 'You have been logged in successfully',
        error: 'Invalid username/password',
      })).subscribe((response: any) => {
        this.tokenService.saveToken(response);
        window.location.href = "../content/";
      }, error => {
        this.isUserSigningIn = false;
      });
    } else {
      this.toast.error("Please enter valid credentials");
      this.isUserSigningIn = false;
    }
  }
}
