import { Component, OnInit } from '@angular/core';
import { Product, products } from '../products'; 

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  constructor() { }

  public products: Product[] = [];

  ngOnInit(): void {
    this.products = products; 
  }
}