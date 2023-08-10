import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  public user!: User;

  constructor(private cookieService: CookieService) {}

  public storeUserInCookies(userDetails: User): void {
    const encodedUser: string = btoa(JSON.stringify(userDetails));
    this.cookieService.set('userDetails', encodedUser, {
      expires: 365,
    });
  }

  public get userDetails(): User {
    return this.user;
  }
  public set userDetails(userDetails: User) {
    this.user = userDetails;
  }
}
