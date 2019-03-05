import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {FAQComponent} from "./faq/faq.component";
import {ProductsComponent} from "./products/products.component";
import {AuthComponent} from "./auth/auth.component";

const routes: Routes = [
  {path:"", redirectTo: "/home", pathMatch: "full"},
  {path: "auth", component: AuthComponent},
  {path: "home", component: HomeComponent},
  {path: "products", component: ProductsComponent},
  {path: "about", component: AboutComponent},
  {path: "faq", component: FAQComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
