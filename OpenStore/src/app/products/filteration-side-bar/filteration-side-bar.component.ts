import { Component, OnInit, Injectable } from '@angular/core';
import { ProductService } from 'src/app/product.service';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-filteration-side-bar',
  templateUrl: './filteration-side-bar.component.html',
  styleUrls: ['./filteration-side-bar.component.css']
})
export class FilterationSideBarComponent implements OnInit {

  allCounts:number = 0 
  simpleCounts:number = 0
  complexCounts:number = 0
  constructor(public productService:ProductService) { }

  ngOnInit(): void {
    this.allCounts = this.productService.productsCount
    this.simpleCounts = this.productService.simpleProductsCount
    this.complexCounts = this.productService.complexProductsCount
  }
  changeState(state:string){
    this.productService.currentState = state
  }
}
