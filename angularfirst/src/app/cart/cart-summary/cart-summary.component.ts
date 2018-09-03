import { Component, OnInit, DoCheck } from '@angular/core';
import { CartService } from '../cart.service';
import { CartItem } from '../cart-item';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit, DoCheck {

  totalCartItem: number;
  totalCartItemPrice: number;
  cartItems:CartItem[];
  
  constructor(private cartService: CartService) {

  }

  ngOnInit() {
    this.cartItems = this.cartService.list();
  }

  //Dinleme işlemi yapar, değişiklik olursa günceller
  ngDoCheck(){ //Önce implement ettik
    this.totalCartItem = this.cartService.list().reduce((a, b) => a + b.quantity, 0); //gelen her elemanda döner ve hepsini toplar. a dönecek olan değerdir. b ise her bir elemandır. 0 parametresi a'nın başlangıç değerini belirtir.
    this.totalCartItemPrice = this.cartService.list().reduce((a, b) => a + b.quantity * b.product.unitPrice, 0);
  }
}