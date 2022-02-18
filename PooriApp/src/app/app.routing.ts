import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CartComponent } from "./cart/cart.component";
import { LoginComponent } from "./login/login.component";
import { MenuItemDetailComponent } from "./menu-item-detail/menu-item-detail.component";
import { MenuListComponent } from "./menu-list/menu-list.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AuthGaurd } from "./shared/services/auth.gaurd";


const routes : Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'menu-list',
    component: MenuListComponent,
    canActivate: [AuthGaurd]
  },
  {
    path: 'menu-list/:menuId/detail',
    component: MenuItemDetailComponent
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [AuthGaurd]
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'page-not-found',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true })],
  exports: [ RouterModule ]

})
export class AppRoutingModule {}
