import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }


  authenticate(username, password) {
    if (username === "atena" && password === "123") {
      sessionStorage.setItem('authenticaterUser', username);
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticaterUser');
    console.log(user);
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem('authenticaterUser');

  }
}