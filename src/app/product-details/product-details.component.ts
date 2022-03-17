import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeProductId = Number(this.route.snapshot.paramMap.get('productId'));
    this.product = products.find(el => el.id === routeProductId);
  }
}