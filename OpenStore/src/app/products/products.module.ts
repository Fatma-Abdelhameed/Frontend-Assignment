import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { FilterationSideBarComponent } from './filteration-side-bar/filteration-side-bar.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FilterationSideBarComponent,
    ProductsListComponent,
    ProductDetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    ProductsListComponent,
    FilterationSideBarComponent]
})
export class ProductsModule { }
