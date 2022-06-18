import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/product.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productDetails:Product = new Product(0, '', 0, '', '')
  constructor(public productService:ProductService, public ac:ActivatedRoute) { }

  ngOnInit(): void {
    this.productService.getProduct(this.ac.snapshot.params['id']).subscribe(item=>{
      this.productDetails = item
    })
  }

}
