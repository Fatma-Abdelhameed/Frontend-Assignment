import { Injectable } from '@angular/core';
import { Product } from './models/product';
import {HttpClient} from '@angular/common/http'
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
    return this.http.get<Product[]>("https://captello.firebaseio.com/products.json")
  }
}
