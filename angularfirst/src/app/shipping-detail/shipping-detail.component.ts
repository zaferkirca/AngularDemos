import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ShippingDetail } from './shipping-detail';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-shipping-detail',
  templateUrl: './shipping-detail.component.html',
  styleUrls: ['./shipping-detail.component.css']
})

export class ShippingDetailComponent implements OnInit {

  cities = [];
  model: ShippingDetail = new ShippingDetail("", "", true, -1);

  constructor(private cartService: CartService, private notificationService: NotificationsService, private router: Router) {

  }

  ngOnInit() {
    this.cities.push(
      { "id": "34", "name": "İstanbul" },
      { "id": "06", "name": "Ankara" },
      { "id": "28", "name": "Giresun" }
    )
  }

  checkout(form: NgForm) {
    if(form.invalid){
      return;
    }

    this.cartService.clear();
    this.notificationService.info("Başarılı", "Alışveriş Tamamlandı!");
    this.router.navigate(["products"]);
  }
}