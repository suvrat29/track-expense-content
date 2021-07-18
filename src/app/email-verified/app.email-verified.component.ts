import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AppUserService } from '../app.service';

@Component({
  selector: 'email-verified',
  templateUrl: './app.email-verified.component.html',
  styleUrls: ['./app.email-verified.component.scss']
})

export class AppEmailVerifiedComponent implements OnInit {
  email: string = "";
  resetkey: string = "";
  verificationSuccess: number = 0;

  constructor(private router: Router, private route: ActivatedRoute, private userService: AppUserService, private toast: HotToastService) {
    route.queryParams.subscribe((queryData: any) => {
      this.email = queryData["email"];
      this.resetkey = queryData["resetkey"];
    });
  }

  ngOnInit() {
    let post: any = {};
    post.email = this.email;
    post.resetkey = this.resetkey;

    this.userService.verifyUser(post).pipe(this.toast.observe({
      loading: 'Please wait...',
      success: 'Your account has been successfully verified',
      error: 'Failed to verify your account. Please try again later',
    })).subscribe((response) => {
      if (response)
        this.verificationSuccess = 1;
      else
        this.verificationSuccess = 2;
    }, error => {
      this.verificationSuccess = 2;
    });
  }
}
