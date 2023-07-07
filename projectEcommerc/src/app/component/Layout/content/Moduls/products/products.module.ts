import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    ProductsComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
