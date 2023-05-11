import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',  
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

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
      this.invalidLogin = true;

    }

}
}
