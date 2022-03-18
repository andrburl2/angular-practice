import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;

  inCart: boolean = false;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.inCart = this.cartService.isInCart(this.product);
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    this.inCart = true;
  }
}