import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";
import { AuthGuard } from "./services/auth.guard";

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
    // canActivate: [AuthGuard],
  },
  {
    path: "",
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./layouts/admin-layout/admin-layout.module").then(
            (m) => m.AdminLayoutModule
          ),
      },
    ],
  },
  {
    path: "",
    component: AuthLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./layouts/auth-layout/auth-layout.module").then(
            (m) => m.AuthLayoutModule
          ),
      },
    ],
  },
  {
    path: "login",
    loadChildren: () =>
      import("./authentication/login/login.module").then((m) => m.LoginModule),
  },
  {
    path: "register",
    loadChildren: () =>
      import("./authentication/register/register.module").then(
        (m) => m.RegisterModule
      ),
  },

  {
    path: "**",
    redirectTo: "login",
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
