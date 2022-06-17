import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { FilterationSideBarComponent } from './filteration-side-bar/filteration-side-bar.component';



@NgModule({
  declarations: [
    FilterationSideBarComponent,
    ProductsListComponent,
    CreateProductComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ProductsListComponent,
    FilterationSideBarComponent]
})
export class ProductsModule { }
