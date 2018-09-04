import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';
import { ShippingDetailComponent } from './shipping-detail/shipping-detail.component';
import { CartSummaryComponent } from './cart/cart-summary/cart-summary.component';
import { LoggedComponent } from './account/logged/logged.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpModule } from '@angular/http';

import { SimpleNotificationsModule, NotificationsService } from "angular2-notifications";
import { CartService } from './cart/cart.service';
import { VatAddedPipe } from './product/vat-added.pipe';
import { ProductFilterPipe } from './product/product-filter.pipe';

const appRoutes: Routes = [
  {
    path: "", //Gelen istek
    redirectTo: "products", //Yönlendirilecek url
    pathMatch: "full" //Adresin tam olarak girilen path ile eşleşmesi isteniyor
  },
  {
    path: "products", //Eğer "products" pathi gelirse ProductComponent'e yönlendir
    component: ProductComponent
  },
  {
    path: "products/:seoUrl", //Eğer parametre gelecekse : ile yazılır
    component: ProductComponent
  },
  {
    path:"my-cart",
    component: CartComponent
  },
  {
    path:"shipping-detail",
    component: ShippingDetailComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    CartComponent,
    AccountComponent,
    ShippingDetailComponent,
    CartSummaryComponent,
    LoggedComponent,
    NotFoundComponent,
    VatAddedPipe,
    ProductFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    SimpleNotificationsModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    { provide: "ApiUrl", useValue: "http://northwindapi.azurewebsites.net/api/" },
    NotificationsService,
    CartService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }