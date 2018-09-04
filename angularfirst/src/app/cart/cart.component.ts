import { Component, OnInit } from '@angular/core';
import { CartItem } from "./cart-item";
import { Product } from "../product/product";
import { CartService } from "./cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: CartItem[] = [];
  isProductRemoved: boolean = false;
  constructor(private cartService: CartService) {

  }

  ngOnInit() {
    this.cartItems = this.cartService.list();
  }

  removeFromCart(product: Product) {
    if (confirm("Ürünü sepetten çıkarmak istiyor musunuz?")) {
      this.cartService.removeFromCart(product);
      this.isProductRemoved = true;
    }
  }
}