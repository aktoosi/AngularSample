import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


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
  constructor(private router: Router) { }
  


  ngOnInit() {
  }
  save() {
    this.invaldInput();
  }
  invaldInput() {
    if (this.username === "atena" && this.password === "123") {
      this.router.navigate(['welcome',this.username]);
      this.invalidFlag = true;
    }
    else {
      this.invalidFlag = false;
    }
  }

}
