import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./views/pages/about/about.component";
import {CartComponent} from "./views/pages/cart/cart.component";
import {NotFoundComponent} from "./views/pages/not-found/not-found.component";
import {IndexComponent} from "./views/index/index.component";

const routes: Routes = [
  {
    path: '', component: IndexComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'cart', component: CartComponent
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
