import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "atena";
  password = "";
  errormessage = "invalid username or password";
  invalidFlag: boolean = false;
  constructor(private router: Router,
    private hardcodedAuthentication: HardcodedAuthenticationService) { }



  ngOnInit() {

  }
  save() {
    this.invaldInput();
  }
  invaldInput() {
    if (this.hardcodedAuthentication.authenticate(this.username, this.password)) {
      this.router.navigate(['welcome', this.username]);
      this.invalidFlag = false;
    }
    this.invalidFlag = true;
  }

}
