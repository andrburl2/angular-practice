import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;

  constructor() { }

  shareProduct(): void {
    alert('Product has been shared!');
  }

  onNotify(): void {
    alert('You will be notified when the product goes on sale');
  }

  ngOnInit(): void {
  }
}