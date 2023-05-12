import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router){

  }
  userName = "user";
  password = "XXXXXXXX";

  invalidLogin = false;
  errormsg = "Invalid Username or Password";
  //
  loginLogic(){

    
    if(this.userName == "user" && this.password == "XXXXXXXX"){
      //
      this.invalidLogin = false;

    }

    else{
      //
      this.router.navigate(['users']);
      this.invalidLogin = true;

    }

}
}
