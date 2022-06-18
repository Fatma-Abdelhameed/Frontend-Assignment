import { Injectable } from '@angular/core';
import { Product } from './models/product';
import {HttpClient} from '@angular/common/http'
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:Product[] = []
  public currentState:string = 'all'
  public productsCount:number = 0
  public simpleProductsCount:number = 0
  public complexProductsCount:number = 0
  constructor(public http:HttpClient) { }
  getAllProducts(){
    return this.http.get<Product[]>("http://localhost:3000/products")
  }
  getProductData(){
    
  }
}
