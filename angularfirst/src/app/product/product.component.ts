import { Component, OnInit } from '@angular/core';
import { Product } from "./product";
import { ProductService } from "./product.service";
import { NotificationsService } from 'angular2-notifications';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})

export class ProductComponent implements OnInit {

  products: Product[];
  addedProduct: string;

  constructor(private productService: ProductService, private notificationsService: NotificationsService, private cartService: CartService) {

  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(p => {
      this.products = p //p service.getProducts metodundan gelen ürünlerdir. Burada subscribe ile local değişkene atama işlemi yapılıyor.
    });
  }

  addToCart(product: Product) {
    this.addedProduct = product.productName;

    this.cartService.addToCart(product);

    this.notificationsService.success("Başarılı!", product.productName + " Sepete Eklendi");
  }
}