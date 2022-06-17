import { Component, OnInit, Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/product.service';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  productsList:Product[] = []
  constructor(public productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((item)=>{
      this.productsList = item
    })
  }
  filteration(list:Product[]){
    if(this.productService.currentState == "simple"){
      list = this.productsList.filter(product=>{
        return product.category == "simple"
      })
    }else if(this.productService.currentState == "complex"){
      list = this.productsList.filter(product=>{
        return product.category == "complex"
      })
    }
    return list
  }

}
