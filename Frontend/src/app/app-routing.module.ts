import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoggedTemplateComponent } from './templates/logged-template/logged-template.component'; 

import { LoginComponent } from './pages/login/login.component';
import { HomeComponent }  from './pages/home/home.component';

import { AuthGuardService as AuthGuard } from './services/auth-guard.service';


const routes: Routes = [
  { path: '', component: LoggedTemplateComponent, canActivate: [AuthGuard], children: [
    { path: '', component: HomeComponent }
  ]},
  { path: 'login', component: LoginComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }