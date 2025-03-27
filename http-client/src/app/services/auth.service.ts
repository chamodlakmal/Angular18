import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authToken: string = "auth-token";

  constructor() { }

  get getAuthToken() {
    return this.authToken;
  }
}
