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

  constructor(public productService:ProductService) { }

  ngOnInit(): void {
  }
  changeState(state:string){
    this.productService.currentState = state
  }
}
