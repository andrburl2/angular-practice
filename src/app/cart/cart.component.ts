import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms'; 

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  shippingCosts = this.cartService.getShippingPrices();

  checkoutForm = this.formBuilder.group({
    shipping: new FormControl('', Validators.required),
    name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
    address: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(40)])
  })

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.checkoutForm.controls['shipping'].valueChanges.subscribe(() => {
      this.calculateCost();
    });
  }

  submitForm(): void {
    console.log({ ...this.checkoutForm.value, products: this.items });

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

  calculateCost(): number {
    return this.items.reduce((sum, el) => sum + el.price, 0) + Number(this.checkoutForm.controls['shipping'].value)
  }
}