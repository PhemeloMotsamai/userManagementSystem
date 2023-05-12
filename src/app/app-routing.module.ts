import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
//user
const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'users', component: UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }