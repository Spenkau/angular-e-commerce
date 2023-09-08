import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {IndexComponent} from "./index.component";
import {CategoryViewDirective} from "../../shared/directives/category-view.directive";
import {CategoryViewPipe} from "../../shared/pipes/category-view.pipe";
import {FixedLengthPipe} from "../../shared/pipes/fixed-length.pipe";
import {FilterProductsPipe} from "../../shared/pipes/filter-products.pipe";
import {CdkDrag} from "@angular/cdk/drag-drop";



@NgModule({
  declarations: [
    IndexComponent,
    CategoryViewDirective,
    CategoryViewPipe,
    FixedLengthPipe,
    FilterProductsPipe
  ],
    imports: [
        CommonModule,
        FormsModule,
        CdkDrag
    ],
  providers: []
})
export class IndexModule { }
