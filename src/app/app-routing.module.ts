import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./component/login/login.component"
import { HomePageComponent } from './component/home-page/home-page.component';
import { AuthGuard } from './guard/auth-guard.guard';
import { AuthenticationService } from './service/authentication-service.service';
import { NoAuthGuard } from './guard/no-auth.guard';

const routes: Routes = [
  {
    path: "login",
    canActivate: [NoAuthGuard],
    component: LoginComponent,

  }, {
    path: "",
    canActivate: [AuthGuard],
    component: HomePageComponent
  }, {
    path: "**",
    redirectTo: "login",
    pathMatch: "full"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
