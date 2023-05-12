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




  // Variables
  userName = "user";
  password = "XXXXXXXX";

  invalidLogin = false;
  errormsg = "Invalid Username or Password";
  //



  //Methods And logic
  loginLogic(){


    if(this.userName == "user" && this.password == "XXXXXXXX"){

      //Sets invalid login to false


      //Redirect to userr to UsePage
      this.router.navigate(['users']);
      this.invalidLogin = false;

    }


    else{
      //

      this.invalidLogin = true;

    }

}
}
