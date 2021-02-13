import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  // BASE_PATH: 'http://localhost:8080'
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';
  SESSION_TOKEN = '';

  public username: string;
  public password: string;
  public basicAuthToken: string;

  constructor(private http: HttpClient) {

  }

  // tslint:disable-next-line:typedef
  authenticationService(username: string, password: string) {
    return this.http.get(`http://localhost:8080/api/v1/basicauth`,
      { headers: { authorization: this.createBasicAuthToken(username, password) } }).pipe(map((res) => {
      this.username = username;
      this.password = password;
      this.basicAuthToken = this.createBasicAuthToken(username, password);
      this.registerSuccessfulLogin(this.basicAuthToken);
    }));
  }

  // tslint:disable-next-line:typedef
  createBasicAuthToken(username: string, password: string) {
    return 'Basic ' + window.btoa(username + ':' + password);
  }

  // tslint:disable-next-line:typedef
  registerSuccessfulLogin(basicAuthTocken) {
    sessionStorage.setItem(this.SESSION_TOKEN, basicAuthTocken);
  }

  // tslint:disable-next-line:typedef
  logout() {
    sessionStorage.removeItem(this.SESSION_TOKEN);
    this.username = null;
    this.password = null;
  }

  // tslint:disable-next-line:typedef
  isUserLoggedIn() {
    const user = sessionStorage.getItem(this.SESSION_TOKEN);
    if (user === null) { return false; }
    return true;
  }

  // tslint:disable-next-line:typedef
  getLoggedInUserName() {
    const user = sessionStorage.getItem(this.SESSION_TOKEN);
    if (user === null) { return ''; }
    return user;
  }
}
