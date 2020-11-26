import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./component/login/login.component"
import { HomePageComponent } from './component/home-page/home-page.component';
import { AuthGuard } from './guard/auth-guard.guard';
import { AuthenticationService } from './service/authentication-service.service';
import { NoAuthGuard } from './guard/no-auth.guard';
import { SystemTableComponent } from './component/system-table/system-table.component';
import { SystemTableListComponent } from './component/system-table-list/system-table-list.component';
import { EntityListComponent } from './component/entity-list/entity-list.component';
import { EntityCreateComponent } from './component/entity-create/entity-create.component';

const routes: Routes = [
  {
    path: "login",
    canActivate: [NoAuthGuard],
    component: LoginComponent,

  },{
    path: "system-table/:id",
    canActivate: [AuthGuard],
    component: SystemTableComponent,

  },{
    path: "system-table-new",
    canActivate: [AuthGuard],
    component: SystemTableComponent,

  },{
    path: "system-table",
    canActivate: [AuthGuard],
    component: SystemTableListComponent,

  },{
    path: ":id",
    canActivate: [AuthGuard],
    component: EntityListComponent,

  },{
    path: ":id/new",
    canActivate: [AuthGuard],
    component: EntityCreateComponent,

  },{
    path: ":id/:id2",
    canActivate: [AuthGuard],
    component: EntityCreateComponent,

  },{
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
