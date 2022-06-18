import { Injectable } from '@angular/core';
import { Product } from './models/product';
import {HttpClient} from '@angular/common/http'
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:Product[] = []
  currentState:string = 'all'
  productsCount:number = 0
  simpleProductsCount:number = 0
  complexProductsCount:number = 0
  constructor(public http:HttpClient) { }
  getAllProducts(){
    return this.http.get<Product[]>("http://localhost:3000/products")
  }
  getProductData(currentProductId:number){
    return this.http.get<Product>(`http://localhost:3000/products/${currentProductId}`)
  }
}
