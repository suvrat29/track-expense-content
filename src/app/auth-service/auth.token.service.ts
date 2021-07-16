import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

const ACCESS_TOKEN = environment.accessToken;

@Injectable({ providedIn: 'root' })

export class TokenService {
  constructor() { }

  getToken(): string | null {
    return localStorage.getItem(ACCESS_TOKEN);
  }

  saveToken(token: string): void {
    localStorage.setItem(ACCESS_TOKEN, token);
  }

  removeToken(): void {
    localStorage.removeItem(ACCESS_TOKEN);
  }
}
