import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './payment/payment.component';



@NgModule({
  declarations: [CardComponent, CheckoutComponent, PaymentComponent],
  imports: [
    CommonModule
  ]
})
export class ShopModule { }
