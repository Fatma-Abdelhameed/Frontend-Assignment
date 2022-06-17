import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from '../products-list/products-list.component';
import { CreateProductComponent } from '../create-product/create-product.component';



@NgModule({
  declarations: [
    ProductsListComponent,
    CreateProductComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
