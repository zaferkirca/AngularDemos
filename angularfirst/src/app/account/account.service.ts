import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AccountService {

  private loggedIn = false;

  constructor(@Inject("ApiUrl") private apiUrl, private http: Http) { }

  login(username, password): Observable<boolean> {
    let url: string = this.apiUrl + "/account/login";
    let headers = new Headers();
    headers.append("Authorization", btoa(username + ":" + password));

    var requestOptions = new RequestOptions({ headers: headers });

    return this.http.post(url, JSON.stringify({ username, password }), requestOptions)
      .map(response => response.json())
      .map(response => {
        if (response) {
          localStorage.setItem("isLogged", response);
          this.loggedIn = true;
        }
        return response;
      });
  }

  logOut() {
    localStorage.removeItem("isLogged");
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}