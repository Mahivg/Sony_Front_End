import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirstDetailComponent } from "./first-detail/first-detail.component";
import { LoginComponent } from "./login/login.component";
import { MyFirstComponent } from "./my-first/my-first.component";
import { MySecondComponent } from "./my-second/my-second.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'first',
    component: MyFirstComponent
  },
  {
    path: 'first/:id',
    component: FirstDetailComponent
  },
  {
    path: 'second',
    component: MySecondComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
