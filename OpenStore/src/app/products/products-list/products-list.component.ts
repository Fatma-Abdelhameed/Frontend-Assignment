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
  cacheKey = 'productsCashing'
  getProducts(){
    this.productService.getAllProducts().subscribe((item)=>{
      localStorage[this.cacheKey] = JSON.stringify(item)
    })
  }
  getSimpleProductsCount(){
    this.productService.simpleProductsCount = this.productsList.filter((product)=>{
      return product.category == "simple"
    }).length
  }
  getComplexProductsCount(){
    this.productService.complexProductsCount = this.productsList.filter((product)=>{
      return product.category == "complex"
    }).length
  }
  syncProducts(){
    this.productService.getAllProducts().subscribe((item)=>{
      this.productsList = item
      localStorage[this.cacheKey] = JSON.stringify(item)
    })
    //this.getProducts()
    /*this.productService.getAllProducts().subscribe((item)=>{
      localStorage[this.cacheKey] = JSON.stringify(item)
      this.productsList = item
    })*/
    //this.productsList = JSON.parse(localStorage[this.cacheKey])
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
  ngOnInit(): void {
    this.productsList = JSON.parse(localStorage[this.cacheKey])
    this.productService.productsCount = this.productsList.length
    this.getSimpleProductsCount()
    this.getComplexProductsCount()
  }
  constructor(public productService:ProductService) { 
    this.getProducts()
  }
}
