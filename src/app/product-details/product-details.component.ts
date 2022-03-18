import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  inCart: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService  
  ) { }

  ngOnInit(): void {
    const routeProductId = Number(this.route.snapshot.paramMap.get('productId'));
    this.product = products.find(el => el.id === routeProductId);

    this.inCart = this.cartService.isInCart(this.product);
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    this.inCart = true;
  }
}