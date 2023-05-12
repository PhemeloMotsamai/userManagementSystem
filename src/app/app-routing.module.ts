import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { ErrorComponent } from './error/error.component';
//user
const routes: Routes = [
  {path:'', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'users/:name', component: UsersComponent},
  {path: '**', component: ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
