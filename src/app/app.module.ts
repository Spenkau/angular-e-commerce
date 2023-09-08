import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './views/pages/about/about.component';
import { CartComponent } from './views/pages/cart/cart.component';
import { NotFoundComponent } from './views/pages/not-found/not-found.component';
import {IndexModule} from "./views/index/index.module";
import {HeaderComponent} from "./views/index/header/header.component";
import {FooterComponent} from "./views/index/footer/footer.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import { TextTransformDirective } from './shared/directives/text-transform.directive';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CartComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    TextTransformDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IndexModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
