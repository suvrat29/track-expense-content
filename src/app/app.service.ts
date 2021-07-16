import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";
import { TokenService } from "./auth-service/auth.token.service";

const API_URL = environment.apiUrl;

@Injectable({ providedIn: 'root' })

export class AppUserService {
  private baseUrl = 'User/';

  constructor(private router: Router, private http: HttpClient, private tokenService: TokenService) { }

  registerUser(data: any) {
    return this.http.post(API_URL + this.baseUrl + 'register', data);
  }

  verifyUser(data: any) {
    return this.http.post(API_URL + this.baseUrl + 'verify', data);
  }

  login(loginData: any) {
    this.tokenService.removeToken();

    return this.http.post(API_URL + this.baseUrl + 'login/', loginData).subscribe((response: any) => {
      this.tokenService.saveToken(response.token);
    }, error => {
      console.log(error);
    });
  }

  forgotPassword(data: any) {
    return this.http.post(API_URL + this.baseUrl + 'forgotpassword', data);
  }

  resetPassword(data: any) {
    return this.http.post(API_URL + this.baseUrl + 'resetpassword', data);
  }

  logout(email: string) {
    this.http.post(API_URL + this.baseUrl + 'logout/?email=' + email, {}).subscribe(() => {
      this.tokenService.removeToken();
      this.router.navigate(['login']);
    }, error => {
      console.log(error);
      this.tokenService.removeToken();
      this.router.navigate(['login']);
    });
  }
}
